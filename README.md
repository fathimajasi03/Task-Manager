# Task Manager App

## Description
A full-stack task management application built with React and Node.js/Express.  
Allows users to register, login, and manage tasks with status, due dates, and assignees.

## Features
- User signup and login with token-based auth (demo token)
- Create, view, and update tasks
- Backend RESTful API with JSON
- Frontend React app with fetch API calls

## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express
- Communication: REST API, JSON
- Middleware: CORS, JSON parsing

## Installation & Usage

### Backend
1. Navigate to backend folder  
2. Run `npm install`  
3. Start backend: `node server.js` (default port 3001)

### Frontend
1. Navigate to frontend folder  
2. Run `npm install`  
3. Run frontend: `npm start` (default port 3000)  
4. Configure API base URL in frontend to `http://localhost:3001`

## Future Improvements
- Replace in-memory storage with persistent database
- Add real JWT authentication and password hashing
- Enhanced UI/UX features and responsiveness
- User roles and notifications

