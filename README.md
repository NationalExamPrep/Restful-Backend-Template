# Express + TypeScript Backend Template

Production-ready, reusable Express.js backend with TypeScript, Prisma, JWT authentication, and clean architecture.

## 🚀 Features

- **TypeScript** with strict mode enabled
- **Express.js** for REST API
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** with bcrypt password hashing
- **Zod Validation** for request validation
- **Role-based Access Control** (USER, ADMIN)
- **Security**: Helmet, CORS, Rate Limiting
- **Clean Architecture**: Modular structure with services layer
- **Error Handling**: Global error handler with custom AppError class
- **Logging**: Request logger middleware

## 📁 Project Structure

```
src/
├── config/          # Configuration files (env, database)
├── modules/         # Feature modules
│   ├── auth/        # Authentication (controller, service, routes)
│   └── users/       # User management
├── middleware/      # Express middleware
├── utils/           # Utility functions
├── validations/     # Zod validation schemas
├── routes/          # Route aggregation
├── app.ts           # Express app setup
└── server.ts        # Server entry point
prisma/
├── schema.prisma    # Prisma schema
└── seed.ts          # Database seeding
```

## 🛠️ Setup Instructions

### 1. Install Dependencies
