// /src/app/portfolio/[username]/page.tsx
// Next.js 15 App Router — Server Component

import { notFound }  from "next/navigation";
import { redirect }  from "next/navigation";
import { prisma }    from "@/lib/prisma";
import { createServerClient } from "@supabase/ssr";
import { cookies }   from "next/headers";
import { PortfolioClient } from "./PortfolioClient";

// ─── Tipler ──────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ username: string }>;
}

// ─── Helper: getCurrentUser without redirect ─────────────────────

async function tryGetCurrentUser(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll() } }
    );

    const { data: { user }, error } = await supabase.auth.getUser();
    return error || !user ? null : user.id;
  } catch {
    return null;
  }
}

// ─── Sayfa ───────────────────────────────────────────────────────

export default async function PortfolioPage({ params }: PageProps) {
  const { username } = await params;

  // ── Kullanıcıyı bul ──────────────────────────────────────────
  const owner = await prisma.user.findUnique({
    where:  { username },
    select: { id: true, username: true, level: true },
  });

  if (!owner) notFound();

  // ── Mevcut oturum var mı (public sayfa, redirect yok) ────────
  const currentUserId = await tryGetCurrentUser();
  const isOwner = currentUserId === owner.id;

  // ── Submission'ları çek ──────────────────────────────────────
  // Owner ise tüm sandbox submission'ları göster (public + private)
  // Misafirse sadece public olanlar
  const submissions = await prisma.submission.findMany({
    where: {
      userId:    owner.id,
      isSandbox: true,
      status:    "PASSED",
      ...(isOwner ? {} : { isPublic: true }),
    },
    include:  { reviewResult: true },
    orderBy:  { createdAt: "desc" },
  });

  return (
    <PortfolioClient
      owner={owner}
      submissions={submissions.map((s) => ({
        id:           s.id,
        code:         s.code,
        language:     s.language,
        createdAt:    s.createdAt,
        isPublic:     s.isPublic,
        reviewResult: s.reviewResult
          ? {
              overallScore:        s.reviewResult.overallScore,
              correctness:         s.reviewResult.correctness,
              readability:         s.reviewResult.readability,
              timeComplexity:      s.reviewResult.timeComplexity,
              spaceComplexity:     s.reviewResult.spaceComplexity,
              idiomaticStyle:      s.reviewResult.idiomaticStyle,
              feedbackPositive:    s.reviewResult.feedbackPositive,
              feedbackImprovement: s.reviewResult.feedbackImprovement,
              complexityNote:      s.reviewResult.complexityNote,
            }
          : null,
      }))}
      isOwner={isOwner}
    />
  );
}