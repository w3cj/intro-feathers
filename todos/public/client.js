const socket = io('http://localhost:3030');
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({ storage: localStorage }));

const todosService = app.service('todos');

app.authenticate({
  strategy: 'local',
  email: 'cj@null.computer',
  password: 'password123'
}).then((result) => {
  init();
}).catch(e => {
  // Show login page (potentially with `e.message`)
  console.error('Authentication error', e);
});

async function init() {
  const todo = await todosService.create({
    text: 'Learn feathers client!'
  });
  console.log(todo);
}

