# Modern Blog Application

A full-stack blog application with user authentication, blog management, and an admin panel. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## Features

- **User Authentication**
  - User registration and login
  - JWT-based authentication
  - Protected routes
  - User profile management

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich text content support
  - Image uploads with Cloudinary integration
  - Categorized blog posts
  - Responsive design for all devices

- **Admin Panel**
  - User management
  - Content moderation
  - Analytics dashboard

## Tech Stack

### Frontend
- React 18
- React Router DOM v6
- React Hook Form for form handling
- Axios for API requests
- React Hot Toast for notifications
- React Icons
- Tailwind CSS for styling
- Vite as build tool

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for image storage
- Express File Upload for handling file uploads
- CORS for cross-origin requests
- Dotenv for environment variables

## Project Structure

```
blog-app/
├── backend/               # Backend server
│   ├── config/           # Configuration files
│   ├── controller/       # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   └── index.js          # Main server file
│
└── frontend/             # Frontend React application
    ├── public/           # Static files
    └── src/
        ├── assets/       # Images, fonts, etc.
        ├── components/   # Reusable UI components
        ├── pages/        # Page components
        ├── context/      # React context
        ├── hooks/        # Custom React hooks
        └── utils/        # Utility functions
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/me` - Get current user profile
- `POST /api/users/logout` - Logout user

### Blog Posts
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get single blog post
- `POST /api/blogs` - Create new blog post (protected)
- `PUT /api/blogs/:id` - Update blog post (protected)
- `DELETE /api/blogs/:id` - Delete blog post (protected)

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:5173
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_SECRET_KEY=your_cloudinary_secret_key
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000/api
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account (for image storage)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Create a `.env` file in the frontend directory
   - Add the required environment variables (see above)

5. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend (in a new terminal):
     ```bash
     cd frontend
     npm run dev
     ```

6. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Built with ❤️ using the MERN stack

---

**Happy Blogging!** 🚀
