# VectorJob

An AI-powered job recommendation platform, built with the MERN stack. This repo is a from-scratch rebuild of an earlier prototype, with a focus on clean architecture and defensible design decisions rather than quick feature-stacking.

> **Status:** 🚧 Work in progress. User authentication (register/login/logout) is implemented. Resume analysis and job recommendation features are planned next.

## Tech Stack

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT (`jsonwebtoken`) for auth tokens, `bcryptjs` for password hashing
- Cookie-based sessions via `cookie-parser`

**Frontend**
- React 19 + Vite
- React Router v7
- Tailwind CSS
- Axios for API calls

## Folder Structure

```
Vector-Job/
├── backend/
│   ├── server.js                  # Entry point — loads env, connects DB, starts server
│   └── src/
│       ├── app.js                 # Express app setup and route mounting
│       ├── config/
│       │   └── database.js        # MongoDB connection (Mongoose)
│       ├── controllers/
│       │   └── auth.controller.js # Register / login / logout logic
│       ├── models/
│       │   ├── user.models.js     # User schema
│       │   └── blacklist.model.js # Blacklisted (logged-out) JWTs
│       └── routes/
│           └── auth.routes.js     # /api/auth routes
│
└── frontend/
    ├── index.html
    └── src/
        ├── main.jsx                # React entry point
        ├── App.jsx                 # Root component, mounts the router
        ├── app.routes.jsx          # Route definitions
        └── features/
            └── auth/
                ├── pages/
                │   ├── Login.jsx
                │   └── Register.jsx
                └── services/
                    └── auth.api.js  # Axios calls to the auth API
```

The backend follows a `routes → controllers → models` structure, and the frontend is organized by feature (`features/auth/...`) rather than by file type, so each feature's pages, services, and (eventually) components live together.

## Features

**Implemented**
- User registration with hashed passwords (bcrypt)
- Login with JWT issued as an HTTP-only-style cookie
- Logout with token blacklisting (invalidates the JWT server-side instead of just clearing the client cookie)

**Planned**
- Auth middleware to protect routes and verify/blacklist-check JWTs
- Resume upload and parsing
- AI-based resume analysis
- Job recommendation engine
- User dashboard (frontend)

## Getting Started

### Prerequisites
- Node.js
- A MongoDB instance (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

Run the dev server:

```bash
npm run dev
```

The API runs on `http://localhost:3000`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Vite will print the local dev URL (typically `http://localhost:5173`).

## API Endpoints

| Method | Endpoint             | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | `/api/auth/register`  | Create a new user account            |
| POST   | `/api/auth/login`     | Log in and receive a JWT cookie      |
| GET    | `/api/auth/logout`    | Log out and blacklist the current JWT|

## Why a rebuild?

The earlier version of this project (originally called ResumeIQ) was built with FastAPI + PostgreSQL + React. This version is a ground-up rebuild in the MERN stack, done independently, with the goal of being able to explain and defend every architectural decision — not just get it running.