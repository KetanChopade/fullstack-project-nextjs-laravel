"# Fullstack Project - Next.js + Laravel" 

Project Title and Overview
Fullstack Project – Next.js + Laravel

A simple fullstack web application built with Next.js (frontend) and Laravel (backend) using a MySQL database. It demonstrates CRUD functionality, API integration, and modern responsive UI.
- Frontend: Next.js, React, CSS / Bootstrap
- Backend: Laravel, PHP
- Database: MySQL
- Other:  Fetch API,APIs, Composer

 Folder Structure
/frontend → Next.js frontend application  
/backend  → Laravel backend (API + MySQL connection)

etup Instructions (Local Installation)
Backend (Laravel)

Go inside the backend folder:

cd backend
composer install
cp .env.example .env
php artisan key:generate


Configure your .env file (database name, username, password).

Run migrations:

php artisan migrate


Start the server:

php artisan serve


→ Runs on http://127.0.0.1:8000

Frontend (Next.js)

Go inside the frontend folder:

cd frontend
npm install


Create a .env.local (if needed) and set backend API URL:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api


Start the frontend:

npm run dev


→ Runs on http://localhost:3000
