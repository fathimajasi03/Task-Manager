const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Sample users and tasks (in-memory)
let users = [{ username: 'user', password: 'pass' }];
let tasks = [
  { id: 1, title: 'Demo Task', description: 'Task description', assignedTo: 'user', dueDate: '2025-12-31', status: 'Pending' },
];

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User created' });
});

// Login endpoint with simple auth check
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid username or password' });
  res.json({ accessToken: 'dummy-access-token' });
});

// Simple auth middleware for demonstration
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization || '';
  if (authHeader === 'Bearer dummy-access-token') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}

// Get tasks
app.get('/tasks', authenticate, (req, res) => {
  res.json(tasks);
});

// Add task
app.post('/tasks', authenticate, (req, res) => {
  const { title, description, assignedTo, dueDate, status } = req.body;
  const newTask = { id: tasks.length + 1, title, description, assignedTo, dueDate, status: status || 'Pending' };
  tasks.push(newTask);
  res.status(201).json({ message: 'Task added' });
});

// Update task status
app.patch('/tasks/:id', authenticate, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { status } = req.body;
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  task.status = status;
  res.json({ message: 'Task updated' });
});

// **Correct named wildcard route for React SPA fallback**
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});