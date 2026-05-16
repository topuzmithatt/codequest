FROM node:20-bullseye

# Gerekli dilleri kur (Python, Java)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    default-jdk \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

# Çalışma dizini oluştur
WORKDIR /app

# Paket dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Prisma dosyalarını kopyala ve generate et
COPY prisma ./prisma
RUN npx prisma generate

# Tüm dosyaları kopyala
COPY . .

# Next.js uygulamasını derle
RUN npm run build

# Uygulamanın ve WebSocket sunucusunun portlarını dışarı aç
EXPOSE 3000
EXPOSE 3001

# Başlatma komutu (package.json'daki start script'i)
CMD ["npm", "run", "start"]
