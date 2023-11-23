const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello Section Jakarta!')
});

app.get('/kuliah', (req, res) => {
  res.send({fakultas: 'Informatika'});
});

app.get('/jakarta', (req, res) => {
    res.send({section: 'Jakarta'});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})