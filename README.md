Task Manager App
Description
  This is a full-stack Task Management Application built with React on the frontend and Node.js with Express on the backend. It allows users to register, log in, create, view, and update tasks assigned to users with due dates and statuses.
Features
  User authentication with signup and login
  Token-based secured API endpoints (demo token implementation)
  Create, read, and update tasks with title, description, assignee, due date, and status
  Backend REST API using Express and JSON communication
  Frontend built with React and Fetch API for seamless backend integration
Technologies Used
  Frontend: React.js
  Backend: Node.js, Express.js
  Communication: RESTful JSON APIs
  Middleware: CORS, JSON body parsing
Installation and Usage
  Backend
    Navigate to the backend folder
    Run npm install to install dependencies
    Start backend server: node server.js (runs on port 3001)
  Frontend
    Navigate to the frontend folder
    Run npm install to install dependencies
    Start frontend development server: npm start (runs on port 3000)
    Ensure API URLs in the frontend point to http://localhost:3001
  Workflow
    Signup a new user or login
    Manage task list: add new tasks, view existing tasks, and update task status
Future Improvements
  Replace in-memory storage with a persistent database
  Implement real JWT authentication with password hashing
  Enhance UI/UX and responsiveness
  Add user roles and notification features
