// /src/app/profile/page.tsx
// Next.js 15 App Router — Server Component

import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { prisma }         from "@/lib/prisma";
import { VSCodeLayout }   from "@/components/layout/VSCodeLayout";
import {
  ProfileHeader,
  StatsGrid,
  BadgeShelf,
  WeeklyLeaderboard,
  type ProfileUser,
  type ProfileStats,
  type BadgeData,
  type LeaderboardEntry,
} from "@/components/profile/index";
import { ProfileTour } from "./ProfileTour";
import { ProfileActions } from "@/components/profile/ProfileActions";

export const metadata = {
  title: "Profil",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();

  const dbUser = await prisma.user.findUniqueOrThrow({
    where: { id: user.id },
    include: {
      submissions: {
        where:   { status: "PASSED" },
        orderBy: { createdAt: "desc" },
        select:  { id: true, createdAt: true },
      },
      badges: {
        include: { badge: true },
        orderBy: { earnedAt: "desc" },
      },
      streak:        true,
      learningPaths: true,
    },
  });

  const topUsers = await prisma.user.findMany({
    orderBy: { weeklyXp: "desc" },
    take:    10,
    select:  { id: true, username: true, weeklyXp: true, level: true },
  });

  const profileUser: ProfileUser = {
    id:       dbUser.id,
    username: dbUser.username,
    level:    dbUser.level,
    xp:       dbUser.xp,
    hearts:   dbUser.hearts,
  };

  const stats: ProfileStats = {
    totalXp:             dbUser.xp,
    level:               dbUser.level,
    currentStreak:       dbUser.streak?.currentStreak ?? 0,
    completedChallenges: dbUser.submissions.length,
  };

  const allBadges = await prisma.badge.findMany({ orderBy: { requiredValue: "asc" } });
  const earnedSet = new Set(dbUser.badges.map((ub) => ub.badgeId));

  let badges: BadgeData[] = allBadges.map((badge) => {
    const userBadge = dbUser.badges.find((ub) => ub.badgeId === badge.id);
    return {
      id:          badge.id,
      name:        badge.name,
      description: badge.description,
      iconUrl:     badge.iconUrl,
      earned:      earnedSet.has(badge.id),
      earnedAt:    userBadge
        ? new Date(userBadge.earnedAt).toLocaleDateString("tr-TR")
        : undefined,
    };
  });

  // Mock rozetler (Sunum için)
  const mockBadges: BadgeData[] = [
    { id: "mock-1", name: "İlk Görev Tamamlandı", description: "İlk kodlama görevini başarıyla bitirdin.", iconUrl: "🌟", earned: true, earnedAt: "10.05.2026" },
    { id: "mock-2", name: "5. Görev", description: "5 görev tamamladın, hızlanıyorsun!", iconUrl: "🔥", earned: true, earnedAt: "12.05.2026" },
    { id: "mock-3", name: "10. Görev", description: "10 görev tamamlandı, artık bir ustasın.", iconUrl: "🏆", earned: false },
    { id: "mock-4", name: "3 Gün Üst Üste Giriş", description: "3 günlük streak serisi yakaladın.", iconUrl: "📅", earned: true, earnedAt: "15.05.2026" },
    { id: "mock-5", name: "7 Gün Streak", description: "7 gündür buradasın, harika!", iconUrl: "⚡", earned: false },
    { id: "mock-6", name: "30 Gün Streak", description: "Tam 1 aydır aralıksız kod yazıyorsun.", iconUrl: "👑", earned: false },
    { id: "mock-7", name: "Gece Kuşu", description: "Gece yarısından sonra kod yazanlar için.", iconUrl: "🦉", earned: true, earnedAt: "14.05.2026" },
    { id: "mock-8", name: "Kusursuz Kod", description: "Hiç hata almadan testi geçenler için.", iconUrl: "✨", earned: true, earnedAt: "11.05.2026" },
    { id: "mock-9", name: "Hızlı Çözücü", description: "Görevi 5 dakikadan kısa sürede bitirenler için.", iconUrl: "🚀", earned: false },
  ];

  // Eğer gerçek veritabanında bu isimlerde rozet yoksa mockları ekle
  mockBadges.forEach(mockBadge => {
    if (!badges.find(b => b.name === mockBadge.name)) {
      badges.push(mockBadge);
    }
  });

  const leaderboard: LeaderboardEntry[] = topUsers.map((u, i) => ({
    rank:     i + 1,
    userId:   u.id,
    username: u.username,
    weeklyXp: u.weeklyXp,
    level:    u.level,
  }));

  const userRank = leaderboard.find((e) => e.userId === user.id)?.rank ?? null;

  // En son oluşturulan öğrenme yolundan doğru learn linkiüret
  const firstPath = dbUser.learningPaths[0];
  const learnHref = firstPath
    ? `/learn/${firstPath.topicsOrder[0] ?? "variables"}?lpId=${firstPath.id}`
    : undefined;

  return (
    <VSCodeLayout
      userId={user.id}
      hearts={dbUser.hearts}
      xp={dbUser.xp}
      level={dbUser.level}
      streak={dbUser.streak?.currentStreak ?? 0}
      weeklyRank={userRank}
      username={dbUser.username}
      learnHref={learnHref}
    >
      <div
        className="overflow-y-auto h-full px-6 py-6 space-y-6 relative"
        style={{ background: "#1e1e1e" }}
      >
        <ProfileTour />

        <div id="tour-step-1">
          <ProfileHeader user={profileUser} />
        </div>

        <ProfileActions portfolioUrl={`/portfolio/${dbUser.username}`} />

        <div id="tour-step-2">
          <StatsGrid     stats={stats} />
        </div>
        <div id="tour-step-3">
          <BadgeShelf    badges={badges} />
        </div>
        <div id="tour-step-4">
          <WeeklyLeaderboard
            leaderboard={leaderboard}
            currentUserId={user.id}
          />
        </div>
      </div>
    </VSCodeLayout>
  );
}