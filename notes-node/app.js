
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read the notes', {
        title: titleOptions
    })
    .command('remove', 'Remove the note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log(process.argv);
console.log(argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log("There is duplicate in title or body")
    } else {
        console.log("Note added successfully!")
    }
} else if (command === 'list') {
    var all = notes.getAll();
    console.log(`There are total ${all.length} notes!`);
    all.forEach((note) => {
        notes.logNote(note);
    })
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}