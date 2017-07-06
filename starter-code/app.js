const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.set('layout','layout');

app.get('/random', (req, res) => {
  client.getRandomJoke().then((response) => {
    //variable como objeto
    let obj = {
      joke: response.value,
    };
    res.render('index', obj);
  });
});


app.listen(3050, () => {
  console.log('Connected to the server!');
});
