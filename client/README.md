# ClassTrack - Hệ Thống Quản Lý Điểm Danh

## 📁 Cấu Trúc Thư Mục

```
client/
├── app/                          # App Router (Next.js 14)
│   ├── (auth)/                   # Auth route group
│   │   ├── login/
│ │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/              # Dashboard route group
│   │   ├── students/
│   │   │   └── page.tsx
│   │   ├── teachers/
│   │   │   └── page.tsx
│   │   ├── attendance/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   ├── students/
│   │   │   └── route.ts
│   │   ├── teachers/
│   │   │   └── route.ts
│   │   └── attendance/
│   │       └── route.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/                   # React Components
│   ├── ui/                       # Base UI components
│   ├── layout/                   # Layout components
│   ├── students/                 # Student components
│   ├── teachers/                 # Teacher components
│   └── attendance/               # Attendance components
│
├── services/                     # API Service layer
│   └── student.service.ts
│
├── store/                        # State management
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Utilities & helpers
│
├── types/                        # TypeScript types
│   ├── auth.type.ts
│   ├── student.type.ts
│   ├── teacher.type.ts
│   └── attendance.type.ts
│
├── utils/                        # Utility functions
│   ├── formatDate.ts
│   └── validate.ts
│
├── config/                       # App configuration
│   └── site.ts
│
├── actions/                      # Server Actions
│
└── public/                       # Static assets
```

## 🚀 Getting Started

```bash
# Di chuyển vào thư mục client
cd client

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## 📝 Routes

- `/login` - Đăng nhập
- `/register` - Đăng ký
- `/` - Dashboard tổng quan
- `/students` - Quản lý học sinh
- `/teachers` - Quản lý giáo viên
- `/attendance` - Điểm danh

## 🔧 API Endpoints

- `GET/POST /api/students` - Quản lý học sinh
- `GET/POST /api/teachers` - Quản lý giáo viên
- `GET/POST /api/attendance` - Quản lý điểm danh

## 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React
