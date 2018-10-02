// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	// db.collection("Todos").deleteMany({text: "Eat"}).then((res) => {
	// 	console.log(res);
	// })

	// db.collection("Todos").deleteOne({text: "Walk a dog"}).then((res) => {
	// 	console.log(res);
	// })

	// db.collection("Todos").findOneAndDelete({text: "Walk a dog"}).then((res) => {
	// 	console.log(res);
	// })

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5bb3b1f466a7277b1ce671af")
	}).then((res) => {
		console.log(res);
	});

	// db.close();
});