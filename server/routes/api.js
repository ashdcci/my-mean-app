const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'signity',
    database : 'poppin'
});

connection.connect(function(err) {
    if (err) {
    	console.error('Error connecting: ' + err.stack);
    	return;
	}
	console.log('DB connection established');
});


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


router.post('/login',(req, res) =>{
  console.log(req.body);
    var sql = 'select id from users where fname ='+req.body.username+' ';
  	connection.query(sql,function(err,rows){
      if(err) throw(err);
      res.status(200).json(rows);

    });
});







module.exports = router;
