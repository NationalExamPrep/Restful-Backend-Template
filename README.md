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
- **API Documentation**: Interactive Swagger/OpenAPI documentation

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

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials and JWT secret.

### 3. Database Setup

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database (optional)
npm run prisma:seed
```

### 4. Run the Server

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## 📚 API Documentation

Once the server is running, access the interactive Swagger documentation at:

**http://localhost:5000/api-docs**

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas with examples
- Interactive API testing interface
- Authentication support (JWT Bearer token)
- Try out endpoints directly from the browser

To use protected endpoints in Swagger:
1. Click the "Authorize" button at the top
2. Enter your JWT token in the format: `Bearer <your-token>`
3. Click "Authorize" and close the dialog
4. Now you can test protected endpoints

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (authenticated)
- `PUT /api/users/:id` - Update user (authenticated)

## 🔐 Authentication

Include JWT token in Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 📝 API Response Format

All responses follow this structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

## 🧪 Example Requests

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Get Current User
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <your-token>"
```

## 🔒 Security Features

- Helmet for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Password hashing with bcrypt
- JWT token authentication
- Input validation with Zod

## 🏗️ Architecture Patterns

- **Service Layer**: Business logic separated from controllers
- **Middleware**: Reusable authentication, validation, error handling
- **Validation**: Centralized Zod schemas
- **Error Handling**: Custom AppError class with global handler
- **Database**: Prisma client singleton pattern
- **Utilities**: Helper functions for auth, responses, error wrapping

## 📦 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:seed` - Seed database with sample data

## 🎯 Best Practices

- Strict TypeScript configuration
- No business logic in controllers
- Async/await throughout
- Centralized error handling
- Clean validation with Zod
- Secure password handling
- JWT token management
- Role-based access control

## 📚 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt
- Zod
- Helmet
- CORS
- express-rate-limit
- Swagger (swagger-jsdoc, swagger-ui-express)

## 🚦 Health Check

```bash
curl http://localhost:5000/health
```

## � Quick Links

- **Health Check**: http://localhost:5000/health
- **API Documentation (Swagger)**: http://localhost:5000/api-docs
- **API Base URL**: http://localhost:5000/api

## �📄 License

MIT
