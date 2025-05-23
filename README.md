# 🎨 HobbyHub - A Local Hobby Group Organizer

**Live Site:** [https://hobby-hub-papaya.web.app/](https://hobby-hub-papaya.web.app/)  
**Client Repo:**  
**Server Repo:**

## 📌 Project Overview

HobbyHub is a dynamic platform that allows users to discover, create, and join local hobby-based groups. Whether it’s reading, painting, gaming, or hiking — HobbyHub connects people through shared interests. It's built using **React**, **Firebase**, **MongoDB**, and **Express.js**.

---

## 🚀 Key Features

- 🔐 **Authentication System**  
  Email/password login with Google Sign-in using Firebase Auth.

- 📋 **Create & Manage Hobby Groups**  
  Users can create, update, and delete their own hobby-based groups.

- 📂 **Dynamic Group Listings**  
  View all groups, join ongoing ones, or view group details with full info.

- 🧑‍💻 **My Groups Dashboard**  
  Logged-in users can see and manage only their created groups.

- 🌙 **Dark/Light Theme Toggle**  
  Switch between dark and light UI modes from the navbar.

- 📅 **Join Group Validation**  
  If the group’s start date has passed, joining is disabled.

---

## 🔧 Tech Stack

### 👨‍💻 Frontend

- React.js
- React Router DOM
- Firebase Authentication
- React ICons
- React Toastify
- Tailwind CSS + DaisyUI
- Lottie React 
- React Tooltip

### 🌐 Backend

- Express.js
- MongoDB
- CORS
- Dotenv

---

## ✨ Pages & Routes

| Route              | Description                                     |
| ------------------ | ----------------------------------------------- |
| `/`                | Home page with banner, featured groups          |
| `/login`           | Login page with Firebase auth                   |
| `/signup`        | Register page with password validation rules    |
| `/group/create`     | Create a new hobby group (private route)        |
| `/groups`          | View all public groups                          |
| `/group/:id`       | View group details (join button logic included) |
| `/dashboard`        | Dashboard for user-created groups               |
| `/group/:id/edit` | Update group details (private route)            |
| `*`                | Custom 404 Not Found Page                       |

---

## 🛡️ Environment Variables

Create a `.env` file in your **client** directory with:
