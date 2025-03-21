📌 Overview

Ini adalah proyek sederhana menggunakan React dengan Vite yang mengimplementasikan fitur Login, Register, Homepage, dan User Profile menggunakan API dari reqres.in. Proyek ini juga menerapkan state management dengan useContext untuk autentikasi.

🚀 Features

User Authentication (Login & Register)

Protected Route (Redirect ke login jika tidak ada user yang login)

Fetch User Data dari API

Create, Update, Delete User

Responsive UI

🛠 Tech Stack

Frontend: React + Vite + TailwindCSS

State Management: Context API

Routing: React Router

API: Reqres.in (Mock API)

📂 Folder Structure

📂 project-root
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📜 Navbar.jsx
┃ ┃ ┣ 📜 UserCard.jsx
┃ ┣ 📂 pages
┃ ┃ ┣ 📜 Login.jsx
┃ ┃ ┣ 📜 Register.jsx
┃ ┃ ┣ 📜 Home.jsx
┃ ┃ ┣ 📜 Profile.jsx
┃ ┣ 📂 context
┃ ┃ ┣ 📜 AuthContext.jsx
┃ ┣ 📜 App.jsx
┃ ┣ 📜 main.jsx
┣ 📜 package.json
┣ 📜 README.md

📌 Installation & Setup

Clone repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies

npm install

Run development server

npm run dev

Untuk login dan Register, gunakan data yang sudah ada di reqres.in

