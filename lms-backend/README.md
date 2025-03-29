# ✅ LMS Backend - Module 1: Auth System

## 📦 ติดตั้ง Dependency
```
npm install express cors dotenv jsonwebtoken bcryptjs prisma @prisma/client
```

## 🛠 ตั้งค่า .env
ให้ใช้ไฟล์ `.env` ที่แนบมา และตั้งรหัสให้ตรงกับ PostgreSQL ของคุณ

## 🔧 Prisma Setup
```
npx prisma generate
npx prisma migrate dev --name init
```

## 🚀 รันระบบ
```
node index.js
```
หรือ
```
npx nodemon index.js
```

## 🧪 ทดสอบ API
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me` (แนบ Bearer Token)