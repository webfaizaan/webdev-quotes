const app = require('./app');

const port = process.env.PORT || 1337;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
