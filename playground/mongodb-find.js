// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	// db.collection('Todos').find({completed: false}).toArray().then((docs) => {
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to find', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count ${count}`);
	// }, (err) => {
	// 	console.log('Unable to find', err);
	// });

	db.collection('Users').find({name: "Utkarsh"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});

	// db.close();
});