const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '5bb50816d4a4f8ec0ac7e4a81';

if(!ObjectID.isValid(id)){
	console.log('id is invalid');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(todo);
// });

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('id not find');
	}
	console.log(todo);
}).catch((err) => {
	console.log(err);
});

