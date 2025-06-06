node index.js to start backend 
npm run build to make build
npm start to start frontend

in frontend directory there is an .env file so we have to change the url of backend 
REACT_APP_API_URL=http://13.127.47.7:3500
REACT_APP_API_URL=http://ip_of_instance:3500

.env of backend:-
PORT=3500
DB_PORT=27017

DB_NAME=myappdb
DB_HOST=localhost
DB_USER=ankit
DB_PASS=ankit

#MONGO_CONN_STR='mongodb://ankit:ankit@localhost:27017/myappdb?authSource=admin

.env of frontend:-

REACT_APP_API_URL=http://13.127.47.7:3500
REACT_APP_BACKEND_URL=http://13.127.47.7:3500

# Full-Stack Application Setup

This guide walks you through setting up and running a full-stack application with:

- **Frontend**: React (created using Create React App)
- **Backend**: Node.js with Express
- **Database**: MongoDB

---

## 🛠️ Project Structure

project-root
├── /backend
│ ├── index.js
│ ├── .env
│ └── package.json
└── /frontend
├── /src
├── .env
└── package.json



---

## 🚀 Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd backend

Install dependencies:
```
  npm install

Start the backend server:
```
node index.js

## 🚀 Frontend Setup
1. **Navigate to the frontend directory**:

   ```bash
  cd frontend

2. **Install dependencies**:

   ```bash
   npm install

3. **Configure the backend API URL**:

In the .env file inside the frontend directory, set the backend URL:
```
  env
  REACT_APP_API_URL=http://<backend-ip>:3500

Replace <backend-ip> with the actual IP address of your backend server.

4. **Start the frontend development server**:

```
  npm start

The frontend will run on port 3000 by default.


## 🛠️ Build Frontend for Production
To build the frontend for production:

1. **Navigate to the frontend directory**:

```bash
  Copy
  Edit
  cd frontend
  Build the frontend:

```bash
  Copy
  Edit
  npm run build

This will create a build directory containing the production-ready files.

Serve the built frontend:

You can serve the built frontend using a static file server or integrate it with your backend server.


## 🔐 Environment Variables

1. **Backend (backend/.env)**:

```env
  Copy
  Edit
  PORT=3500
  DB_PORT=27017
  DB_NAME=myappdb
  DB_HOST=localhost
  DB_USER=ankit
  DB_PASS=ankit
  Frontend (frontend/.env):

```env
  Copy
  Edit
  REACT_APP_API_URL=http://<backend-ip>:3500
