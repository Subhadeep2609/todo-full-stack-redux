# 📝 Todo Full Stack Redux

A modern **Full Stack Todo Application** built with **React.js, Redux Toolkit, Node.js, Express.js, and MongoDB**. This project demonstrates how Redux Toolkit can be used to efficiently manage global state while integrating seamlessly with a REST API.

🌐 **Live Demo:** https://todo-full-stack-redux.vercel.app/

📂 **GitHub Repository:** https://github.com/Subhadeep2609/todo-full-stack-redux

---

# 🚀 Features

* ➕ Add Todo
* ✏️ Update Todo
* 🗑️ Delete Todo
* 📋 View All Todos
* ✅ Form Validation
* 🔔 Toast Notifications
* 🌐 REST API Integration
* 🗄️ Global State Management using Redux Toolkit
* 📱 Responsive User Interface

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux Toolkit
* React Redux
* React Router DOM
* React Hook Form
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

---

# 📂 Project Structure

```text
todo-full-stack-redux/
│
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js
│   │   │
│   │   ├── features/
│   │   │   └── todoSlice.js
│   │   │
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/Subhadeep2609/todo-full-stack-redux.git
```

Move into the project directory.

```bash
cd todo-full-stack-redux
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Backend Setup

```bash
cd server
npm install
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# 🧠 Redux Toolkit Flow

```text
User Action
      │
      ▼
dispatch(Action)
      │
      ▼
Redux Slice
      │
      ▼
Axios API Request
      │
      ▼
Express Server
      │
      ▼
MongoDB Database
      │
      ▼
Updated Response
      │
      ▼
Redux Store Updated
      │
      ▼
useSelector()
      │
      ▼
React Component Re-renders
```

---

# 📌 Core Redux Concepts Used

* configureStore()
* createSlice()
* useDispatch()
* useSelector()
* Global State Management
* Async API Calls
* CRUD Operations

---


# 📚 What I Learned

While building this project, I learned:

* How Redux Toolkit simplifies state management.
* Creating and configuring a Redux Store.
* Managing global state using `createSlice()`.
* Using `useDispatch()` to dispatch actions.
* Using `useSelector()` to access state.
* Integrating Redux Toolkit with a REST API.
* Synchronizing frontend state with a MongoDB database.
* Structuring a scalable React application.

---

# 🔮 Future Improvements

* 🔐 User Authentication
* 🌙 Dark Mode
* 🔍 Search Todos
* 🏷️ Category & Priority
* 📅 Due Date Support
* 📌 Drag & Drop Reordering
* ☁️ Deployment Improvements

---

# 👨‍💻 Author

**Subhadeep Saha**

* GitHub: https://github.com/Subhadeep2609
* LinkedIn: https://www.linkedin.com/in/subhadeep-saha-3b5ba9201/

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It motivates me to build and share more projects!

---

## Thank You ❤️

Thank you for checking out this project. Feedback and suggestions are always welcome!
