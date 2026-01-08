# ClassTrack Server - NestJS Backend

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Additional Packages
```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install @prisma/client bcrypt class-validator class-transformer
npm install @nestjs/swagger swagger-ui-express
npm install -D @types/passport-jwt @types/bcrypt prisma
```

### 3. Setup Environment Variables
```bash
cp .env.example .env
# Edit .env with your database credentials
```

### 4. Initialize Prisma
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run Development Server
```bash
npm run start:dev
```

Server will start on: `http://localhost:4000`

---

## 📚 API Documentation

Swagger docs available at: `http://localhost:4000/api/docs`

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Example Request
```bash
# Register
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123",
    "name": "John Doe",
    "role": "STUDENT"
  }'

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123"
  }'
```

---

## 📁 Project Structure

```
server/
├── src/
│   ├── modules/
│   │   └── auth/          # Auth module (JWT)
│   ├── common/
│   │   ├── guards/        # Auth guards
│   │   └── constants/     # Constants
│   ├── prisma/            # Prisma service
│   ├── app.module.ts
│   └── main.ts
│
├── prisma/
│   └── schema.prisma      # Database schema
│
└── .env                   # Environment variables
```

---

## 🗄️ Database Schema

Current models:
- **User** - Authentication and user management
  - Fields: id, email, password, name, role
  - Roles: ADMIN, TEACHER, STUDENT

---

## 🛠️ Development Commands

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Testing
npm run test
npm run test:e2e

# Prisma
npx prisma studio        # Database GUI
npx prisma migrate dev   # Run migrations
npx prisma generate      # Generate Prisma client
```

---

## 🔐 Features

- ✅ JWT Authentication
- ✅ Role-based access (ADMIN, TEACHER, STUDENT)
- ✅ Password hashing with bcrypt
- ✅ Input validation with class-validator
- ✅ Swagger API documentation
- ✅ CORS enabled for Next.js client
- ✅ Prisma ORM with PostgreSQL

---

## 📝 Next Steps

1. Add Users module
2. Add Classes module
3. Add Attendance module
4. Add Guards for role-based access
5. Add Email notifications
