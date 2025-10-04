# 💬 Quick Chat

A **real-time chat application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** and **Socket.io**.  
It features **secure authentication**, **instant messaging**, and **live online user status** updates — all in a modern, responsive UI. 🚀

---

## ⚡ Features

- 🔐 **JWT Authentication** — Secure login & signup system  
- 💬 **Real-time Messaging** — Powered by Socket.io  
- 🧑‍🤝‍🧑 **Online/Offline User Tracking**  
- 🗂️ **MongoDB Database** for storing users and messages  
- 📸 **Cloudinary Integration** for image uploads  
- 🌐 **CORS Enabled API** for smooth client-server communication  
- 🧱 **Modular Codebase** with MVC structure  
- ⚙️ **Deployed on Vercel**

---

## 🛠️ Tech Stack

### **Frontend**
- React + Vite ⚛️  
- Tailwind CSS 🎨  
- Axios  
- React Hot Toast (for alerts)  

### **Backend**
- Node.js + Express 🚀  
- MongoDB (Mongoose ORM)  
- Socket.io (for live chat)  
- Cloudinary SDK  
- JWT (JSON Web Token)  
- CORS  

---

## 📂 Folder Structure


### Client
```
client/
├── .env
├── .gitignore
├── context/
│ ├── AuthContext.jsx
│ └── ChatContext.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│ ├── bgImage.svg
│ ├── favicon.svg
│ └── vite.svg
├── README.md
├── src/
│ ├── App.jsx
│ ├── assets/
│ ├── components/
│ │ ├── ChatContainer.jsx
│ │ ├── RightSidebar.jsx
│ │ └── Sidebar.jsx
│ ├── index.css
│ ├── lib/
│ │ └── utils.js
│ ├── main.jsx
│ └── pages/
│ ├── HomePage.jsx
│ ├── LoginPage.jsx
│ └── ProfilePage.jsx
├── vercel.json
└── vite.config.js
```

### Server
```
server/
├── .env
├── controllers/
│ ├── messageController.js
│ └── userController.js
├── lib/
│ ├── cloudinary.js
│ ├── db.js
│ └── utils.js
├── middleware/
│ └── auth.js
├── models/
│ ├── Message.js
│ └── User.js
├── package-lock.json
├── package.json
├── routes/
│ ├── messageRoutes.js
│ └── userRoutes.js
├── server.js
└── vercel.json
```


---

## ⚙️ Installation & Setup

 ### 1️⃣ Clone the repository
```
git clone https://github.com/RohitBansal-github/Chat-app.git
cd Chat-app
```
### 2️⃣ Install dependencies

Backend:
```
cd server
npm install
```

Frontend:
```
cd ../client
npm install
```

### 3️⃣ Environment Variables

Create a .env file inside the server folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
NODE_ENV=development
```

### 🚀 Run Locally
Start Backend:
```
cd server
npm start
```
Start Frontend:
```
cd client
npm run dev
```
Then open 👉 http://localhost:5173

---


## 🌍 Deployment

The backend is deployed on Vercel using a custom vercel.json:
```
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "server.js" }]
}
```

## 🧠 Learning Highlights

Real-time communication with Socket.io

RESTful API creation using Express.js

Handling authentication and JWT securely

Integrating Cloudinary for image handling

Deploying Node.js + MongoDB apps on Vercel

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a PR. 🙌

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Rohit Bansal

📧 rohitbansal7364@gmail.com

🚀 "Building full-stack experiences, one project at a time."

