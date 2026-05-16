<![CDATA[<div align="center">

# 🏆 CodeQuest — Oyunlaştırılmış Yazılım Eğitim Platformu

**Kodlamayı öğrenmek hiç bu kadar eğlenceli olmamıştı.**

CodeQuest, kullanıcıların **Python**, **JavaScript**, **Java** ve **SQL** dillerini interaktif görevler, yapay zekâ destekli kişiselleştirme ve oyunlaştırma mekanikleriyle öğrenmesini sağlayan modern bir web tabanlı eğitim platformudur.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Groq](https://img.shields.io/badge/Groq-LLaMA%203.3-F55036?style=for-the-badge)](https://groq.com/)
[![Monaco Editor](https://img.shields.io/badge/Monaco-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://microsoft.github.io/monaco-editor/)

---

[Özellikler](#-temel-özellikler) · [Tech Stack](#-kullanılan-teknolojiler-tech-stack) · [Mimari](#-sistem-mimarisi-nasıl-çalışır) · [Kurulum](#-kurulum-ve-çalıştırma) · [Ekran Görüntüleri](#-ekran-görüntüleri)

</div>

---

## 📋 İçindekiler

- [Proje Özeti](#-proje-özeti)
- [Temel Özellikler](#-temel-özellikler)
- [Kullanılan Teknolojiler (Tech Stack)](#-kullanılan-teknolojiler-tech-stack)
- [Proje Dizin Yapısı](#-proje-dizin-yapısı)
- [Sistem Mimarisi (Nasıl Çalışır?)](#-sistem-mimarisi-nasıl-çalışır)
- [Veritabanı Şeması](#-veritabanı-şeması)
- [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Lisans](#-lisans)

---

## 🎯 Proje Özeti

Geleneksel programlama eğitimi genellikle pasif video izleme veya statik doküman okumaya dayanır; bu da öğrencilerin motivasyonunu kısa sürede düşürür. **CodeQuest**, bu sorunu **oyunlaştırma (gamification)** ve **yapay zekâ destekli kişiselleştirme** ile çözer.

Platform, her kullanıcıya onboarding sürecinde belirlenen hedef, deneyim seviyesi ve seçilen programlama diline göre **kişiselleştirilmiş bir öğrenme yolu** oluşturur. Kullanıcılar, VS Code benzeri bir arayüzde kod yazarak görevleri tamamlar; kodları **sandbox ortamında güvenli şekilde çalıştırılır** ve otomatik test senaryolarıyla doğrulanır. Başarılı görevler XP kazandırır, seviye atlatır ve rozetler açar; başarısız denemeler ise can kaybına neden olur — tıpkı bir oyunda olduğu gibi.

### Çözülen Problemler

| Problem | CodeQuest Çözümü |
|---|---|
| Pasif öğrenme → düşük motivasyon | XP, seviye, rozet ve seri mekanikleriyle aktif katılım |
| Herkese aynı müfredat | AI destekli kişiselleştirilmiş öğrenme yolu |
| Kod çalıştırma ortamı kurma zorluğu | Tarayıcı içi sandbox kod çalıştırma |
| Geri bildirim eksikliği | AI Code Reviewer ile 5 eksenli otomatik değerlendirme |

---

## ✨ Temel Özellikler

### 🎮 Oyunlaştırma Mekanikleri
- **XP & Seviye Sistemi** — 10 kademeli ilerleme; her görev zorluk × 10 XP kazandırır
- **❤️ Can (Hearts) Sistemi** — 5 can hakkı; yanlış cevap can düşürür, canlar saatte bir yenilenir
- **🔥 Günlük Seri (Streak)** — Ardışık günlerde çalışma serisi; aktif seri XP çarpanını ×1.5'e yükseltir
- **🏅 Rozet Sistemi** — Seviye, seri ve görev tamamlama rozetleri
- **📊 Haftalık XP Takibi** — Haftalık performans istatistikleri

### 🤖 Yapay Zekâ Entegrasyonu
- **AI Onboarding** — Kullanıcı profiline göre kişiselleştirilmiş konu sırası ve başlangıç zorluk seviyesi
- **3 Aşamalı Görev Üretimi** — Soru metni → Referans çözüm → Çalıştırma ile expectedOutput doğrulama
- **AI Code Reviewer** — Correctness, Readability, Time/Space Complexity ve Idiomatic Style eksenlerinde 0-100 puanlama
- **AI İpucu Sistemi** — Cevabı vermeden yönlendiren akıllı ipuçları

### 💻 Desteklenen Programlama Dilleri

| Dil | Çalıştırma Ortamı | Özellikler |
|---|---|---|
| **Python** | Yerel `python -u` | stdin/stdout, UTF-8 desteği |
| **JavaScript** | Yerel `node` | ES6+, readline desteği |
| **Java** | Yerel `javac` + `java` | Derleme + çalıştırma, Scanner desteği |
| **SQL** | Python `sqlite3` üzerinden | In-memory veritabanı, çoklu sorgu desteği |

### 🖥️ VS Code Benzeri Arayüz
- **Monaco Editor** — Sözdizimi vurgulama, otomatik tamamlama ve IntelliSense
- **Entegre Terminal** — xterm.js tabanlı gerçek zamanlı çıktı ve stdin girişi
- **Challenge Panel** — Görev açıklaması, test sonuçları ve ipuçları
- **Review Modal** — Radar grafik ile 5 eksenli kod değerlendirme sonucu

### 📁 Portföy & Profil
- **Kullanıcı Profili** — XP, seviye, rozetler ve öğrenme yolu ilerlemesi
- **Portföy Sayfası** — Herkese açık paylaşılabilir çözümler
- **Çoklu Dil Desteği** — Profil üzerinden yeni dil yolu ekleme

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

### Frontend

| Teknoloji | Sürüm | Kullanım Amacı |
|---|---|---|
| **Next.js** | 16 | App Router, SSR, API Routes |
| **React** | 19 | Bileşen tabanlı UI |
| **TypeScript** | 5 | Tip güvenliği |
| **Tailwind CSS** | 4 | Utility-first stil |
| **Monaco Editor** | 4.7 | Tarayıcı içi kod editörü |
| **xterm.js** | 5.3 | Terminal emülatörü |
| **Socket.IO Client** | 4.8 | Gerçek zamanlı WebSocket iletişimi |

### Backend

| Teknoloji | Sürüm | Kullanım Amacı |
|---|---|---|
| **Next.js API Routes** | 16 | RESTful API uç noktaları |
| **Express.js** | 5 | Sandbox Execution Server |
| **Socket.IO** | 4.8 | Çift yönlü gerçek zamanlı iletişim |
| **Groq SDK** | 1.1 | LLaMA 3.3 70B LLM entegrasyonu |
| **Prisma ORM** | 7.5 | Veritabanı erişim katmanı |
| **Node.js child_process** | — | Sandbox kod çalıştırma |

### Veritabanı & Kimlik Doğrulama

| Teknoloji | Kullanım Amacı |
|---|---|
| **Supabase (PostgreSQL)** | İlişkisel veritabanı (bulut) |
| **Supabase Auth** | Kullanıcı kimlik doğrulama ve oturum yönetimi |
| **Prisma Migrate** | Veritabanı şema yönetimi |

---

## 📁 Proje Dizin Yapısı

```
codequest_v1.0_full/
├── prisma/
│   ├── schema.prisma          # Veritabanı şeması (12 model, 5 enum)
│   └── seed.ts                # Başlangıç verisi (görevler, rozetler)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── ai-hint/       # AI ipucu endpoint'i
│   │   │   ├── hearts/        # Can yenileme endpoint'i
│   │   │   ├── onboarding/    # Onboarding süreci endpoint'i
│   │   │   ├── profile/       # Profil bilgileri endpoint'i
│   │   │   ├── run/           # Kod çalıştırma endpoint'i
│   │   │   ├── sandbox/       # Sandbox görevleri endpoint'i
│   │   │   ├── submission/    # Gönderim geçmişi endpoint'i
│   │   │   └── submit/        # Görev gönderim endpoint'i
│   │   ├── learn/[topic]/     # Dinamik öğrenme sayfası
│   │   ├── login/             # Giriş sayfası
│   │   ├── onboarding/        # Onboarding sayfası
│   │   ├── portfolio/         # Portföy sayfası
│   │   ├── profile/           # Profil sayfası
│   │   ├── sandbox/           # Sandbox sayfası
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Ana sayfa
│   ├── components/
│   │   ├── layout/
│   │   │   └── VSCodeLayout.tsx    # VS Code benzeri ana düzen
│   │   ├── learn/
│   │   │   ├── ChallengePanel.tsx  # Görev paneli
│   │   │   ├── EditorPanel.tsx     # Monaco editör paneli
│   │   │   ├── ReviewModal.tsx     # AI değerlendirme modalı
│   │   │   └── TerminalPanel.tsx   # Terminal paneli
│   │   ├── onboarding/
│   │   │   └── OnboardingChat.tsx  # Sohbet tabanlı onboarding
│   │   └── profile/
│   │       ├── index.tsx           # Profil bileşeni
│   │       ├── AddLanguageModal.tsx # Yeni dil ekleme modalı
│   │       └── ProfileActions.tsx  # Profil aksiyonları
│   └── lib/
│       ├── ai/
│       │   ├── orchestrator.ts     # AI görev üretici (3 aşamalı)
│       │   └── reviewer.ts        # AI kod değerlendirici
│       ├── gamification/
│       │   └── engine.ts          # Oyunlaştırma motoru
│       ├── learn/
│       │   └── getChallenge.ts    # Görev seçim algoritması
│       ├── sandbox/
│       │   └── pistonClient.ts    # Yerel kod çalıştırma istemcisi
│       └── prisma.ts              # Prisma client singleton
├── exec-server.js                 # Sandbox Execution Server (Express + Socket.IO)
├── check-challenges.ts            # Görev doğrulama scripti
├── package.json
└── .env.example                   # Ortam değişkenleri şablonu
```

---

## ⚙️ Sistem Mimarisi (Nasıl Çalışır?)

CodeQuest, iki ana sunucu üzerinde çalışır: **Next.js App Server** (port 3000) ve **Execution Server** (port 3001). Kullanıcı kodu yazıp gönderdiğinde aşağıdaki akış gerçekleşir:

### Genel Mimari Diyagramı

```
┌─────────────────────────────────────────────────────────────────────┐
│                        KULLANICI (Tarayıcı)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────────────┐ │
│  │ Monaco Editor │  │ Terminal     │  │ Challenge Panel           │ │
│  │ (Kod Yazma)  │  │ (xterm.js)   │  │ (Görev & Test Sonuçları) │ │
│  └──────┬───────┘  └──────▲───────┘  └───────────▲───────────────┘ │
│         │                 │                      │                 │
└─────────┼─────────────────┼──────────────────────┼─────────────────┘
          │                 │                      │
          │ WebSocket       │ WebSocket            │ HTTP (REST)
          │ (Socket.IO)     │ (stdout/stderr)      │
          ▼                 │                      │
┌─────────────────────┐     │         ┌────────────┴────────────────┐
│  Execution Server   │     │         │  Next.js API Routes         │
│  (Express:3001)     ├─────┘         │  (Port 3000)                │
│                     │               │                             │
│  ┌───────────────┐  │               │  /api/submit    → Test      │
│  │ child_process  │  │               │  /api/run       → Çalıştır │
│  │ spawn()       │  │               │  /api/onboarding→ AI Yolu   │
│  │               │  │               │  /api/ai-hint   → İpucu     │
│  │  ┌──────────┐ │  │               │  /api/hearts    → Can       │
│  │  │ Python   │ │  │               │  /api/profile   → Profil    │
│  │  │ Node.js  │ │  │               │                             │
│  │  │ Java     │ │  │               └──────────┬──────────────────┘
│  │  │ SQLite   │ │  │                          │
│  │  └──────────┘ │  │                          │
│  └───────────────┘  │               ┌──────────▼──────────────────┐
│                     │               │  Prisma ORM                 │
│  .temp_exec/        │               │  ┌───────────────────────┐  │
│  (geçici dosyalar)  │               │  │ PostgreSQL (Supabase) │  │
└─────────────────────┘               │  └───────────────────────┘  │
                                      │                             │
                                      │  ┌───────────────────────┐  │
                                      │  │ Groq API (LLaMA 3.3)  │  │
                                      │  │ • Görev üretimi       │  │
                                      │  │ • Kod değerlendirme   │  │
                                      │  │ • İpucu üretimi       │  │
                                      │  └───────────────────────┘  │
                                      └─────────────────────────────┘
```

### 🔄 Kod Çalıştırma Akışı (Sandbox)

Kullanıcı "Çalıştır" butonuna bastığında:

```
1. Kullanıcı Monaco Editor'de kod yazar
          │
          ▼
2. Socket.IO ile 'runCode' eventi → Execution Server (port 3001)
          │
          ▼
3. Execution Server:
   ├─ Benzersiz sessionId üretir (crypto.randomBytes)
   ├─ Kodu geçici dosyaya yazar (.temp_exec/script_<sessionId>.<ext>)
   ├─ Dile göre komutu belirler:
   │   ├─ Python  → python -u script.py
   │   ├─ JS      → node script.js
   │   ├─ Java    → javac Main.java → java Main
   │   └─ SQL     → Python sqlite3 runner üzerinden
   └─ child_process.spawn() ile süreci başlatır
          │
          ▼
4. Süreç çıktıları (stdout/stderr) Socket.IO üzerinden
   gerçek zamanlı olarak terminale aktarılır
          │
          ▼
5. Süreç tamamlanınca 'finished' eventi gönderilir
   ve geçici dosyalar temizlenir
          │
          ▼
6. Zaman aşımı koruması: 10 saniye sonra SIGKILL
```

### 📝 Görev Gönderimi ve Doğrulama Akışı

Kullanıcı "Gönder" butonuna bastığında:

```
1. POST /api/submit  →  Kullanıcı kodu + challengeId
          │
          ▼
2. pistonClient.runTests():
   ├─ Her test case için kodu ayrı ayrı çalıştırır
   ├─ stdin olarak test input'u verir
   ├─ stdout çıktısını expectedOutput ile karşılaştırır
   │   ├─ Normalize: trim, lowercase, Türkçe karakter dönüşümü
   │   └─ Sayısal tolerans: float karşılaştırmada %0.001 tolerans
   └─ Sonuç: { passedCount, totalCount, allPassed }
          │
          ▼
3. Gamification Engine (processSubmission):
   ├─ allPassed = true:
   │   ├─ awardXP()     → XP kazandır, seviye kontrolü, rozet kontrolü
   │   ├─ updateStreak() → Seri güncelle, XP çarpanı ayarla
   │   └─ Submission status → PASSED
   └─ allPassed = false:
       ├─ loseHeart()   → Can düşür (sandbox hariç)
       └─ Submission status → FAILED
          │
          ▼
4. AI Code Reviewer (opsiyonel):
   ├─ reviewCode() → Groq LLaMA 3.3 ile 5 eksenli değerlendirme
   └─ ReviewResult → correctness, readability, time/space complexity,
                     idiomatic style, feedbackPositive, feedbackImprovement
```

### 🤖 AI Görev Üretimi (3 Aşamalı Pipeline)

```
Aşama 1 — Yaratıcı Üretim (temperature: 0.7)
  └─ Groq → Soru metni, starterCode, test case input'ları, ipuçları

Aşama 2 — Referans Çözüm (temperature: 0.1)
  └─ Groq → solutionCode (tam çalışır çözüm)

Aşama 3 — Doğrulama
  └─ solutionCode her test input'u ile çalıştırılır
     ├─ Başarılı → stdout expectedOutput olarak kaydedilir
     └─ Başarısız → Fallback: Groq'a expectedOutput sorulur
```

---

## 🗄️ Veritabanı Şeması

Sistem **12 model** ve **5 enum** içeren ilişkisel bir yapıya sahiptir:

```
┌──────────┐     ┌───────────────┐     ┌─────────────┐
│   User   │────<│ LearningPath  │────<│  Challenge   │
│          │     │               │     │              │
│ • hearts │     │ • language    │     │ • testCases[]│──── TestCase
│ • xp     │     │ • difficulty  │     │ • difficulty │
│ • level  │     │ • topicsOrder │     │ • xpReward   │
└────┬─────┘     └───────────────┘     └──────┬───────┘
     │                                        │
     │           ┌──────────────┐              │
     └──────────<│  Submission  │>─────────────┘
                 │              │
                 │ • status     │──── ReviewResult
                 │ • xpEarned   │     • correctness
                 │ • code       │     • readability
                 └──────────────┘     • overallScore

     ┌──────────┐     ┌──────────┐     ┌──────────┐
     │  Streak  │     │  Badge   │     │ Referral │
     │ • current│     │ • type   │     │ • code   │
     │ • longest│     │ • icon   │     │ • used   │
     └──────────┘     └──────────┘     └──────────┘
```

### Temel Enum'lar

| Enum | Değerler |
|---|---|
| `Language` | PYTHON, JAVASCRIPT, JAVA, SQL, CSHARP, GO, RUST, R, SWIFT, KOTLIN |
| `UserGoal` | EXAM_PREP, JOB_HUNTING, CURIOSITY |
| `ExperienceLevel` | NONE, SOME, YES |
| `SubmissionStatus` | PENDING, PASSED, FAILED |
| `BadgeType` | LEVEL, STREAK, CHALLENGE, SPECIAL |

---

## 🚀 Kurulum ve Çalıştırma

### Ön Gereksinimler

| Araç | Minimum Sürüm | Açıklama |
|---|---|---|
| **Node.js** | 18+ | JavaScript çalışma ortamı |
| **npm** | 9+ | Paket yöneticisi |
| **Python** | 3.8+ | Python ve SQL sandbox çalıştırma |
| **Java (JDK)** | 11+ | Java görevleri için (opsiyonel) |
| **Git** | 2.0+ | Versiyon kontrolü |

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/<kullanıcı-adı>/codequest.git
cd codequest
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Ortam Değişkenlerini Yapılandırın

```bash
cp .env.example .env
```

`.env` dosyasını açın ve aşağıdaki değişkenleri doldurun:

```env
# ── Supabase — Veritabanı ──────────────────────────────────────
# Supabase Dashboard > Settings > Database > Connection pooling
DATABASE_URL="postgresql://postgres:[SIFRE]@[HOST]:6543/postgres?pgbouncer=true"

# Supabase Dashboard > Settings > Database > Direct connection
DIRECT_URL="postgresql://postgres:[SIFRE]@[HOST]:5432/postgres"

# ── Supabase — Auth & Client ───────────────────────────────────
# Supabase Dashboard > Settings > API > Project URL
NEXT_PUBLIC_SUPABASE_URL="https://[PROJE_ID].supabase.co"

# Supabase Dashboard > Settings > API > anon public key
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."

# ── Groq API ───────────────────────────────────────────────────
# https://console.groq.com/keys
GROQ_API_KEY="gsk_..."

# ── Google Gemini (opsiyonel) ──────────────────────────────────
# https://aistudio.google.com/app/apikey
GEMINI_API_KEY="AI..."
```

### 4. Veritabanını Hazırlayın

```bash
# Prisma şemasını veritabanına uygulayın
npx prisma db push

# Prisma Client'ı oluşturun
npx prisma generate

# (Opsiyonel) Başlangıç verilerini yükleyin
npm run seed
```

### 5. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Bu komut `concurrently` ile iki sunucuyu aynı anda başlatır:

| Sunucu | Port | Açıklama |
|---|---|---|
| **Next.js Dev Server** | `http://localhost:3000` | Web uygulaması |
| **Execution Server** | `http://localhost:3001` | Sandbox kod çalıştırma |

### 6. Tarayıcıda Açın

```
http://localhost:3000
```

### Ek Komutlar

```bash
# Prisma Studio ile veritabanını görsel olarak inceleyin
npx prisma studio

# Sorunlu görevleri kontrol edin
npx ts-node check-challenges.ts

# Production build
npm run build
npm start
```

---

## 📸 Ekran Görüntüleri

> **Not:** Aşağıdaki alanlara projenin ekran görüntülerinin bağlantılarını ekleyebilirsiniz.

| Ekran | Önizleme |
|---|---|
| **Ana Sayfa / Giriş** | [Ana Sayfa Ekran Görüntüsü](link-buraya) |
| **Onboarding (Dil & Hedef Seçimi)** | [Onboarding Ekran Görüntüsü](link-buraya) |
| **Öğrenme Sayfası (VS Code Layout)** | [VS Code Layout Ekran Görüntüsü](link-buraya) |
| **Monaco Editör & Terminal** | [Editör ve Terminal Ekran Görüntüsü](link-buraya) |
| **Görev Paneli & Test Sonuçları** | [Challenge Panel Ekran Görüntüsü](link-buraya) |
| **AI Kod Değerlendirme Modalı** | [Review Modal Ekran Görüntüsü](link-buraya) |
| **Profil Sayfası (XP, Seviye, Rozetler)** | [Profil Ekran Görüntüsü](link-buraya) |
| **Portföy Sayfası** | [Portföy Ekran Görüntüsü](link-buraya) |
| **Yeni Dil Ekleme Modalı** | [Dil Ekleme Ekran Görüntüsü](link-buraya) |

---

## 📄 Lisans

Bu proje akademik amaçlarla geliştirilmiştir. Tüm hakları saklıdır.

---

<div align="center">

**CodeQuest** ile kodlamayı keşfetmeye başlayın! 🚀

</div>
]]>
