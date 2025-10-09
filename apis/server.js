import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const router = express.Router();
const SECRET_KEY = 'your-secret-key';

// Sample users data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
  { id: 3, name: 'Admin', email: 'admin@example.com', password: 'admin123' },
];

// Sample tasks data
const tasks = [
  {
    id: 1,
    title: 'Complete project',
    description: 'Finish the task manager application',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Review code',
    description: 'Review pull requests from team members',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Update documentation',
    description: 'Update API documentation',
    status: 'Pending',
  },
  { id: 4, title: 'Fix bugs', description: 'Fix reported bugs in the system', status: 'Completed' },
];

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// JWT middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Register API
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);
  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
});

// Login API
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, email: user.email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get users API with JWT validation
router.get('/users', verifyToken, (req, res) => {
  const userList = users.map(({ password, ...user }) => user);
  res.json(userList);
});

// Get tasks API with JWT validation
router.get('/tasks', verifyToken, (req, res) => {
  res.json(tasks);
});

// Create task API
router.post('/tasks', verifyToken, (req, res) => {
  const { title, description, status } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: status || 'Pending',
  };
  tasks.push(newTask);
  res.json(newTask);
});

// Edit task API
router.put('/tasks/:id', verifyToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, status } = req.body;
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], title, description, status };
  res.json(tasks[taskIndex]);
});

// Delete task API
router.delete('/tasks/:id', verifyToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.json({ message: 'Task deleted successfully' });
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Login API running at http://localhost:3000');
});
