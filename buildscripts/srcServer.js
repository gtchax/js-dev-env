import express from 'express';
import path from 'path';
import open from 'open';

const port = 4000,
      app  = express();


//Routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err)=> {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:'+port);
  }
})