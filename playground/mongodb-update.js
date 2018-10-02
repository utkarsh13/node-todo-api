// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	db.collection('Todos').findOneAndUpdate({
		text: "Walk a dog"
	}, {
		$set: {
			completed: true
		}
	}, {
		retutnOriginal: false
	}).then((res) => {
		console.log(res);
	});

	// db.close();
});