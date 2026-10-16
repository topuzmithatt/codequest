# CodeQuest

**Yapay zekâ destekli, oyunlaştırılmış kodlama öğrenme platformu**

Canlı demo: https://codequest-indol.vercel.app

CodeQuest, programlama öğrenimini oyunlaştırmayı amaçlayan, Next.js, React, TypeScript, PostgreSQL ve Prisma ile geliştirilmiş yapay zekâ destekli bir web platformudur. Kullanıcıların programlama dili, öğrenme hedefi ve deneyim seviyesine göre kişiselleştirilmiş öğrenme rotaları oluşturur. Python, JavaScript, Java ve SQL dillerinde kodlama görevleri, uygulama içi kod editörü, terminal ve test senaryolarıyla etkileşimli bir öğrenme deneyimi sunmayı amaçlar.

Üniversite bitirme projesi olarak geliştirilmiştir.

## Özellikler

- Yapay zekâ destekli öğrenme rotası oluşturma, kod değerlendirme ve kişiselleştirilmiş ipucu sistemi
- Kullanıcının performansına göre uyarlanan görev zorluk seviyeleri ve test tabanlı çözüm doğrulama
- Monaco Editor entegrasyonu ve farklı programlama dillerinde kod çalıştırma altyapısı
- Deneyim puanı (XP), seviye, can, günlük seri, rozet ve haftalık liderlik tablosu mekanikleri
- Kullanıcı kimlik doğrulama, ilerleme takibi ve kod çalışmalarının sergilenebildiği portfolyo sistemi

**Desteklenen diller:** Python, JavaScript, Java, SQL

## Teknolojiler

| Katman | Teknoloji |
| --- | --- |
| Arayüz | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Monaco Editor |
| Sunucu | Next.js API rotaları, ayrı bir Node.js kod çalıştırma sunucusu (`exec-server.js`) |
| Veritabanı | PostgreSQL (Supabase), Prisma ORM 7 |
| Yapay zekâ | Groq API (`groq-sdk`) |

## Mimari

Proje iki süreçten oluşur ve `npm run dev` komutu ikisini birlikte başlatır:

1. **Next.js uygulaması:** Arayüz ve API rotaları (`/api/run`, `/api/submit`, `/api/ai-hint`, `/api/onboarding` vb.).
2. **Kod çalıştırma sunucusu (`exec-server.js`):** Kullanıcı kodunu çalıştırır; uygulama içi terminal bu sunucuya bağlanır (varsayılan port: `3001`).

## Proje Yapısı

```
codequest/
├── prisma/                # schema.prisma, seed.ts
├── public/
├── scripts/
├── src/
│   ├── app/               # sayfalar (learn, login, onboarding, portfolio, profile, sandbox) ve API rotaları
│   ├── components/
│   └── lib/               # yapay zekâ, sandbox ve yardımcı modüller
├── exec-server.js         # kod çalıştırma sunucusu
└── DEPLOYMENT_GUIDE.md    # canlıya alma rehberi
```

## Veri Modeli

`User`, `LearningPath`, `Challenge`, `TestCase`, `Submission`, `ReviewResult`, `Badge`, `UserBadge`, `Streak`, `Referral`

## Kurulum

### Ön gereksinimler

- Node.js ve npm
- Bir Supabase projesi (PostgreSQL veritabanı)
- Bir Groq API anahtarı
- Kod çalıştırma sunucusunu yerelde kullanmak için Python, Node.js ve Java (JDK) kurulu olmalıdır

### Adımlar

```bash
# 1. Projeyi klonlayın
git clone https://github.com/topuzmithatt/codequest.git
cd codequest

# 2. Bağımlılıkları yükleyin (postinstall adımında Prisma Client otomatik oluşturulur)
npm install
```

3. Proje kök dizininde bir `.env` dosyası oluşturup aşağıdaki değişkenleri doldurun:

```env
# Supabase > Settings > Database > Connection pooling
DATABASE_URL="postgresql://..."

# Supabase > Settings > Database > Direct connection (Prisma şema işlemleri için)
DIRECT_URL="postgresql://..."

# Supabase > Settings > API
NEXT_PUBLIC_SUPABASE_URL="https://<proje-kimligi>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."

# https://console.groq.com/keys
GROQ_API_KEY="..."

# İsteğe bağlı: kod çalıştırma sunucusunun adresi (varsayılan: http://<host>:3001)
NEXT_PUBLIC_SOCKET_URL=""
```

```bash
# 4. Veritabanı şemasını uygulayın ve başlangıç verilerini yükleyin
npx prisma db push
npm run seed

# 5. Geliştirme sunucularını başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Canlıya Alma

Canlı ortama alma adımları için [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) dosyasına bakınız.

<!--
## Ekran Görüntüleri

Ekran görüntülerini bir `docs/` klasörüne ekleyip bu bölümün yorum işaretlerini kaldırın:

![Ana ekran](docs/ana-ekran.png)
![Kod editörü ve terminal](docs/editor.png)
-->

## Geliştirici

**Mithat Topuz**
[LinkedIn](https://www.linkedin.com/in/mithat-topuz) · [GitHub](https://github.com/topuzmithatt)
