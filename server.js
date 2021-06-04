const express = require('express');

// Constants
const PORT = 8000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World From rockers!!!');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
module.exports=app;