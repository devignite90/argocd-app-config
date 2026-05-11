const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

if (require.main === module) {
  const port = process.env.PORT || 7000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
