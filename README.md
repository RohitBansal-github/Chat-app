# 💬 Quick Chat

![Project Overview](placeholder_image.png)
*(Replace `placeholder_image.png` with an actual overview image of the project)*

A **real-time chat application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** and **Socket.io**. It features **secure authentication**, **instant messaging**, and **live online user status** updates — all in a modern, responsive UI. 🚀

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Examples](#examples)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact Info](#contact-info)

## Description

Quick Chat is a real-time messaging platform designed to provide instant communication between users. It leverages the power of the MERN stack for robust backend services and a dynamic frontend, complemented by Socket.io for live, interactive chat experiences. The application is built with a focus on secure authentication and user privacy, offering a smooth and responsive user interface for seamless conversations.

## Features

-   🔐 **JWT Authentication** — Secure login & signup system
-   💬 **Real-time Messaging** — Powered by Socket.io for instant message delivery
-   🧑‍🤝‍🧑 **Online/Offline User Tracking** — See who's available to chat
-   🗂️ **MongoDB Database** — Persistent storage for users and messages
-   📸 **Cloudinary Integration** — Support for image uploads in chats
-   🌐 **CORS Enabled API** — Ensures smooth client-server communication
-   🧱 **Modular Codebase** — Organized with an MVC (Model-View-Controller) structure on the backend
-   ⚙️ **Responsive UI** — Modern and adaptable user interface

## Technologies Used

-   **Frontend:**
    -   React + Vite ⚛️: A fast and efficient frontend library for building user interfaces.
    -   Tailwind CSS 🎨: A utility-first CSS framework for rapid UI development.
    -   Axios 🌐: Promise-based HTTP client for making API requests.
    -   React Hot Toast 🍞: Lightweight and customizable toast notifications for user feedback.

-   **Backend:**
    -   Node.js 🟢: A JavaScript runtime for server-side development.
    -   Express ⚙️: A fast, unopinionated, minimalist web framework for Node.js.
    -   MongoDB 🍃: A NoSQL database for flexible data storage.
    -   Mongoose  ODM: Object Data Modeling for MongoDB in a Node.js environment.
    -   Socket.io 🔌: Enables real-time, bidirectional, event-based communication.
    -   Cloudinary ☁️: Cloud-based image and video management.
    -   JWT 🔑 (JSON Web Token): For secure authentication and authorization.
    -   CORS: Middleware to enable Cross-Origin Resource Sharing.

## Project Structure

The project is divided into `client` (frontend) and `server` (backend) directories, following a full-stack architecture.

```
.
├── client/
│   ├── .env                       # Environment variables for frontend
│   ├── context/                   # React Context for Auth and Chat
│   │   ├── AuthContext.jsx
│   │   └── ChatContext.jsx
│   ├── public/                    # Static assets
│   ├── src/                       # Frontend source code
│   │   ├── App.jsx                # Main application component
│   │   ├── assets/                # Images and icons
│   │   ├── components/            # Reusable UI components (ChatContainer, Sidebar, RightSidebar)
│   │   ├── lib/                   # Utility functions
│   │   ├── main.jsx               # Entry point for React app
│   │   └── pages/                 # Page components (HomePage, LoginPage, ProfilePage)
│   ├── package.json               # Frontend dependencies
│   └── vercel.json                # Vercel deployment configuration for frontend
├── server/
│   ├── .env                       # Environment variables for backend
│   ├── controllers/               # Business logic handlers for routes
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── lib/                       # Helper functions and database connection
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── utils.js
│   ├── middleware/                # Express middleware (e.g., authentication)
│   │   └── auth.js
│   ├── models/                    # Mongoose schemas and models
│   │   ├── Message.js
│   │   └── User.js
│   ├── package.json               # Backend dependencies
│   ├── routes/                    # API route definitions
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   ├── server.js                  # Main backend entry point
│   └── vercel.json                # Vercel deployment configuration for backend
└── README.md                      # Main project README
```

## Setup Instructions

Follow these steps to get the Quick Chat application up and running on your local machine.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RohitBansal-github/Chat-app.git
cd Chat-app
```

### 2️⃣ Install dependencies

**Backend:**
Navigate to the `server` directory and install its dependencies:

```bash
cd server
npm install
```

**Frontend:**
Navigate to the `client` directory and install its dependencies:

```bash
cd ../client
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the `server` folder and add the following:

```env
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_URL=your_cloudinary_url_here
NODE_ENV=development
```

**Note:** For the frontend, the `VITE_BACKEND_URL` is configured in `client/context/AuthContext.jsx` from `import.meta.env.VITE_BACKEND_URL`. This should typically point to your backend's URL (e.g., `http://localhost:5000` during local development, or your deployed backend URL).

### 🚀 Run Locally

**Start Backend:**
In the `server` directory, run:

```bash
cd server
npm start
```

The backend server will typically run on `http://localhost:5000` (or another port if configured).

**Start Frontend:**
In the `client` directory, run:

```bash
cd client
npm run dev
```

The frontend application will typically open in your browser at `http://localhost:5173`.

## Usage

Once the frontend and backend servers are running:

1.  Open your web browser and navigate to `http://localhost:5173`.
2.  You will be presented with the login/signup page.
3.  **Sign Up:** Click "Sign up," fill in your details (Full Name, Email Address, Password), and provide a short bio.
4.  **Login:** If you already have an account, switch to the "Login" tab and enter your credentials.
5.  After successful login, you will be redirected to the chat homepage.
6.  The sidebar will display a list of available users. You can search for users using the search bar.
7.  Click on any user in the sidebar to open a chat conversation.
8.  Send text messages or upload images using the input field and gallery icon.
9.  The right sidebar provides details about the selected user and shows shared media.
10. You can edit your profile by clicking the menu icon in the sidebar and selecting "Edit Profile."

## Deployment

The backend of this application is configured for deployment on Vercel using a custom `vercel.json` configuration. The frontend can also be deployed to platforms like Vercel or Netlify.

## Screenshots

| Image                                       | Description                                     |
| :------------------------------------------ | :---------------------------------------------- |
| ![Login Page](placeholder-login.png)        | The user authentication interface.              |
| ![Chat Interface](placeholder-chat.png)     | Main chat window showing conversations.         |
| ![Profile Page](placeholder-profile.png)    | User profile editing and display.               |
| ![Media Sharing](placeholder-media.png)     | Example of shared images within a chat.         |
| *(Replace `placeholder-*.png` with actual screenshots)* |                                                 |

## Examples

Here are some examples of how to interact with the application:

**Frontend Interaction (Browser):**

-   **Login:** Open `http://localhost:5173` in your browser. Enter `test@example.com` and `password123` (or your registered credentials) into the login form and click "Login Now".
-   **Send a Message:** In the chat interface, select a user from the sidebar, type "Hello there!" into the message input field, and press Enter or click the send button.
-   **Upload an Image:** Click the gallery icon next to the message input, select an image file from your local machine, and confirm the upload.

**Inferred API Requests (Example via `curl`):**

*(These are examples based on the client-side `axios` calls and server-side routes. Replace `your_backend_url` with `http://localhost:5000` for local testing or your deployed backend URL.)*

**1. User Signup:**

```bash
curl -X POST \
  your_backend_url/api/auth/signup \
  -H 'Content-Type: application/json' \
  -d '{
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "password": "strongpassword123",
    "bio": "A passionate chat user."
  }'
```

**2. User Login:**

```bash
curl -X POST \
  your_backend_url/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "john.doe@example.com",
    "password": "strongpassword123"
  }'
# Response will include a JWT token
```

**3. Send a Message:**

```bash
curl -X POST \
  your_backend_url/api/messages/send/680f50e4f10f3cd28382ecf9 \
  -H 'Content-Type: application/json' \
  -H 'token: YOUR_JWT_TOKEN' \
  -d '{
    "text": "Hey, how are you doing?"
  }'
# Replace '680f50e4f10f3cd28382ecf9' with the actual receiver's User ID.
# Replace 'YOUR_JWT_TOKEN' with the token received after login.
```

## API Documentation

The Quick Chat application exposes a RESTful API for user authentication, profile management, and real-time messaging.

| Method | Endpoint                       | Description                              | Parameters / Body                                                  | Authentication |
| :----- | :----------------------------- | :--------------------------------------- | :----------------------------------------------------------------- | :------------- |
| `POST` | `/api/auth/signup`             | Register a new user                      | `fullName`, `email`, `password`, `bio` (optional), `profilePic` (optional, base64) | None           |
| `POST` | `/api/auth/login`              | Authenticate user and get JWT token      | `email`, `password`                                                | None           |
| `GET`  | `/api/auth/check`              | Check user authentication status         | None                                                               | JWT Required   |
| `PUT`  | `/api/auth/update-profile`     | Update user profile details              | `fullName` (optional), `bio` (optional), `profilePic` (optional, base64) | JWT Required   |
| `GET`  | `/api/messages/users`          | Get list of all users                    | None                                                               | JWT Required   |
| `GET`  | `/api/messages/:userId`        | Get messages for a specific chat partner | None (userId in path)                                              | JWT Required   |
| `POST` | `/api/messages/send/:userId`   | Send a message to a user                 | `text` (string) or `image` (base64 string)                         | JWT Required   |
| `PUT`  | `/api/messages/mark/:messageId`| Mark a message as seen                   | None (messageId in path)                                           | JWT Required   |

**Base URL:** `your_backend_url` (e.g., `http://localhost:5000` or your deployed URL)

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a PR. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact Info

**Rohit Bansal**
📧 Email: rohitbansal7364@gmail.com
🚀 "Building full-stack experiences, one project at a time."
