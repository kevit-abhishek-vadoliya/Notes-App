const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


yargs.version('1.1.0')


//add
yargs.command({
    command: 'add',
    describe: 'Add a new property',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a property',
    builder:{
        title: {
            describe: "Enter note Title ou want to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler(){
        notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe: 'Title of note you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse();
