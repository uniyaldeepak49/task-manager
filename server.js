const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.db = router.db;
app.use(jsonServer.defaults());
app.use(auth); // adds /login and /register
app.use(router);

app.listen(3000, () => console.log('Auth API running at http://localhost:3000'));
