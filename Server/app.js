const express = require('express');
const request = require('sync-request');
const bodyParser = require('body-parser');
const cors = require('cors');
const FlickrService = require('./flickr-service');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.get('/search', function(req, res){
    const query = req.query.query;
	const page = req.query.page; 
	
	var serviceResponse = new FlickrService().search(query,page).then((result) => {
		res.json(result);
	}, (err) => {
		console.log(err);
		res.status(500).send("Something went wrong");
	});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))