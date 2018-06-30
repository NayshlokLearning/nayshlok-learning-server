import express from 'express'
import router from './controllers/router'

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));
app.use(router);

app.listen(3100, function() {
  console.log('Listening on port 3100...')
})
