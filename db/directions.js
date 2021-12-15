const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
class Directions {

    async readFromFile () {
        var notes = await readFile("./db/db.json", "utf8")
        return notes;
    }

    async writeToFile () {
        var notes = await readFile("./db/db.json", "utf8")
        console.log(notes);
    }

    async readAndAppend (newNote) {
        var notes = await readFile("./db/db.json", "utf8")
        notes = JSON.parse(notes);
        notes.push(newNote);
        console.log(notes);
        writeFile('./db/db.json', JSON.stringify(notes));

    }
}

module.exports = new Directions();