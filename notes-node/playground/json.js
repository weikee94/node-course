// var obj = {
//     name: 'Wei'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var person = '{"name": "Wei", "age": 24 }';

// var jsonObj = JSON.parse(person);
// console.log(typeof jsonObj);
// console.log(jsonObj);

const fs = require('fs');

var originalNote = {
    title: 'Title',
    body: 'Body'
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
