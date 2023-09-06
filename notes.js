const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {

    const notes = loadNotes();
    const duplicateTitle = notes.filter((x) => x.title === title)
    debugger

    if (duplicateTitle.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green("New note added!!!!!!"))
    }
    else {
        console.log(chalk.red("Title already exists"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((x) => x.title !== title)
    if (updatedNotes.length !== notes.length) {
        console.log(chalk.green("note Removed ") + title)
    }
    else {
        console.log(chalk.bgRed("NO Note Found!!!!"))
    }
    saveNotes(updatedNotes);


}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your Notes"));
    notes.forEach((note) => {
        console.log(note['title']);
    })

}

const readNote = (title) =>{
    const notes = loadNotes();
    const noteToRead = notes.find((x) => x.title == title)

    if(noteToRead){
        console.log(chalk.inverse(noteToRead.title));
        console.log(noteToRead.body);
    }
    else{
        console.log(chalk.red.inverse("Note not Found!!"))
    }
    

}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    }
    catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}