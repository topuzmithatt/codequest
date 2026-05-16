# CodeQuest Canlıya Alma (Deployment) Rehberi

Bu rehber, CodeQuest projesinin baştan sona internet üzerinde tüm fonksiyonlarıyla (Python, Java, Javascript, SQL sandbox çalıştırma, yapay zeka entegrasyonu ve web arayüzü) nasıl canlıya alınacağını detaylıca açıklamaktadır.

Projenin yapısı gereği, içerisinde hem **Next.js (Arayüz ve API)** hem de kod derleme işlemlerini gerçek zamanlı (WebSocket) yapan **Execution Server (exec-server.js)** barındırmaktadır.

Bu ikili yapının ve farklı programlama dillerinin kusursuz çalışması için projeyi Docker destekleyen **Railway.app** platformunda 2 ayrı mikro-servis olarak yayınlayacağız.

---

## Ön Hazırlıklar

Bu adımlara başlamadan önce şu hesaplara sahip olduğunuzdan emin olun:
1. [GitHub](https://github.com/) hesabı (Kodları tutmak için).
2. [Railway.app](https://railway.app/) hesabı (Projeyi yayınlamak için).
3. [Supabase](https://supabase.com/) hesabı (Veritabanı için).

---

## Adım 1: Projeyi GitHub'a Yüklemek

Kodlarımızı sunucuya ulaştırmak için önce GitHub deposu (repository) oluşturmalıyız.

1. GitHub hesabınıza giriş yapın.
2. Sağ üst köşedeki **"+"** ikonuna tıklayıp **"New repository"** seçeneğini seçin.
3. Deponuza bir isim verin (Örn: `codequest`).
4. Ekstra hiçbir seçeneği (README vs.) işaretlemeden en alttaki **"Create repository"** butonuna basın.
5. Bilgisayarınızda (VS Code) projenizin klasöründe yeni bir terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
git init
git add .
git commit -m "İlk yükleme ve production ayarlari eklendi"
git branch -M main
git remote add origin https://github.com/topuzmithatt/codequest.git
git push -u origin main
```

---

## Adım 2: Çevresel Değişkenleri (Environment Variables) Hazırlamak

Projemizin çalışması için `.env` dosyasındaki anahtarlara ihtiyacımız var. Yerel bilgisayarınızdaki `.env` dosyasını açın ve şu verileri bir kenara not edin:
- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `GROQ_API_KEY` (veya `OPENAI_API_KEY`)

*Not: Eğer yerelde kullandığınız Supabase URL'si sadece size (localhost) aitse, Supabase üzerinden yeni bir proje oluşturup canlı veritabanı linklerini kullanmanız gerekir.*

---

## Adım 3: Railway.app Üzerinde Kod Çalıştırma Motorunu (Backend) Kurmak

Sistemin "Sandbox" yani kullanıcıların yazdığı kodları derleme işini yapan arka plan sunucusunu kuracağız.

1. [Railway.app](https://railway.app/)'e girip GitHub hesabınızla bağlantı sağlayın.
2. Sağ üstten **"New Project"** butonuna tıklayın.
3. **"Deploy from GitHub repo"** seçeneğine tıklayın.
4. GitHub'a yüklediğiniz **`codequest`** projenizi seçin.
5. *"Deploy Now"* demek yerine sağdaki **"Add Variables"** butonuna tıklayın.
6. Not ettiğiniz `.env` bilgilerini buraya tek tek ekleyin (Şimdilik `NEXT_PUBLIC_SOCKET_URL` eklemeyin).
7. Panelde projenizin bir blok şeklinde oluştuğunu göreceksiniz. Bu bloğa tıklayın.
8. Üst menüden **"Settings" (Ayarlar)** sekmesine girin.
9. Aşağıya kaydırıp **"Deploy"** bölümünü bulun.
10. **Custom Start Command** kısmına şunu yazın: `node exec-server.js` (Böylece Next.js yerine sadece derleyici sunucumuz çalışır).
11. Yine Settings sekmesinde **"Networking"** bölümünü bulun ve **"Generate Domain"** butonuna basın.
12. Railway size `https://codequest-xxxx.up.railway.app` şeklinde bir URL verecektir. **Bu URL'yi kopyalayın.**

---

## Adım 4: Railway.app Üzerinde Web Arayüzünü (Next.js) Kurmak

Şimdi kullanıcıların göreceği asıl siteyi oluşturacağız. Railway projemizin içindeyken (üst kısımda yeni bir servis ekleyeceğiz):

1. Panelin sağ üstündeki **"+ New"** butonuna tıklayın.
2. Tekrar **"GitHub Repo"** seçeneğini seçip **aynı projeyi (`codequest`)** bir kez daha ekleyin.
3. Ekrana ikinci bir kutu (servis) eklenecek. Bu yeni eklenen kutuya tıklayın.
4. Önceki adımda olduğu gibi **"Variables"** kısmına gelin ve Supabase/Yapay Zeka API şifrelerinizi buraya da ekleyin.
5. **ÖNEMLİ:** Buraya ekstra olarak yeni bir değişken ekleyin:
   - **Variable Name:** `NEXT_PUBLIC_SOCKET_URL`
   - **Value:** Bir önceki adımda (Adım 3) kopyaladığınız Backend URL'sini yapıştırın. (Örn: `https://codequest-xxxx.up.railway.app`)
6. Üst menüden **"Settings"** sekmesine girin.
7. **"Deploy"** bölümünde **Custom Start Command** kısmına şunu yazın: `npm run build && next start`
8. **"Networking"** bölümünde **"Generate Domain"** diyerek asıl sitenizin linkini oluşturun.

---

## Adım 5: Sistem Testi ve Son Kontroller

Her iki servisinizin de yanında yeşil "Tık" (Active) ibaresi belirdiğinde siteniz kullanıma hazırdır. 

1. İkinci oluşturduğumuz servisin (Arayüz servisi) ürettiği domain'e (Örn: `codequest-frontend.up.railway.app`) tıklayarak siteye girin.
2. Giriş yapın veya yeni kayıt oluşturun.
3. Öğrenme rotasından herhangi bir göreve girin.
4. "Çalıştır" butonuna bastığınızda, sağ taraftaki panelde "Çalışıyor..." ibaresini ve ardından sorunsuz şekilde konsol çıktısını (Python, Java fark etmeksizin) görüyorsanız kurulum **tamamen başarılı** demektir!

### Karşılaşılabilecek Sorunlar ve Çözümleri:
* **"Terminal çalışmıyor veya hiç çıktı vermiyor":** Railway panelinden ilk kurduğumuz Backend servisinin ayarlarındaki Domain'in doğru oluşturulduğundan ve `NEXT_PUBLIC_SOCKET_URL` değişkenine doğru eklendiğinden emin olun.
* **"Görevler yüklenmiyor":** Veritabanı URL'lerinizin doğru girilip girilmediğini kontrol edin. Gerekirse Supabase SQL Editörden tablolara veri (seed) eklemesi yapmanız gerekebilir.
