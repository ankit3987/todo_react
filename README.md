# Full-Stack Application Setup

This guide walks you through setting up and running a full-stack application with:

- **Frontend**: React (created using Create React App)
- **Backend**: Node.js with Express
- **Database**: MongoDB
**note : node version 16**
---

## 🛠️ Project Structure

```
   /project-root
   ├── /backend
   │ ├── index.js
   │ ├── .env
   │ └── package.json
   └── /frontend
   ├── /src
   ├── .env
   └── package.json
```

## 🚀 Backend Setup

1. **Navigate to the backend directory**:

   ```
      cd backend
   ```

Install dependencies:

   ```
      npm install

   ```

Start the backend server:

```
      node index.js
```

## 🚀 Frontend Setup
1. **Navigate to the frontend directory**:

```
  cd frontend
```
2. **Install dependencies**:

```
   npm install
```
3. **Configure the backend API URL**:

In the .env file inside the frontend directory, set the backend URL:
```
  env
  REACT_APP_API_URL=http://<backend-ip>:3500
```
Replace <backend-ip> with the actual IP address of your backend server.

4. **Start the frontend development server**:

```
  npm start
```
The frontend will run on port 3000 by default.


## 🛠️ Build Frontend for Production
To build the frontend for production:

1. **Navigate to the frontend directory**:

```
   cd frontend

Build the frontend:

```
  npm run build
```

This will create a build directory containing the production-ready files.

Serve the built frontend:

You can serve the built frontend using a static file server or integrate it with your backend server.

```

## 🔐 Environment Variables

1. **Backend (backend/.env)**:

```
  PORT=3500
  DB_PORT=27017
  DB_NAME=myappdb
  DB_HOST=localhost
  DB_USER=ankit
  DB_PASS=ankit
  Frontend (frontend/.env):
```

```
  REACT_APP_API_URL=http://<backend-ip>:3500
```
