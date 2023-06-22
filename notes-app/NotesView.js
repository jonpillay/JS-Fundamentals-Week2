const NotesModel = require("./lib/models");

class NotesView {
  constructor(notesInstance, client) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = notesInstance
    this.client = client

    this.addNoteButton = document.querySelector('#add-note-button');

    this.getAPINotes = document.querySelector('#notes-from-api');

    this.notesToAPI = document.querySelector('#notes-to-api')

    this.getAPINotes.addEventListener('click', () => {
      this.displayNotesFromAPI()
    })

    this.addNoteButton.addEventListener('click', () => {
      this.addNote()
      this.displayNotes()
    });

    this.notesToAPI.addEventListener('click', () => {
      this.noteToAPI()
    })
  }

  addNote() {
    //document.body.innerHTML = ""
    const noteInput = document.querySelector('#note-input')
    const note = noteInput.value
    this.notes.addNote(note)
    noteInput.value = ""
  }

  displayNotes() {

    const notes = document.querySelectorAll('.note')

    notes.forEach( note => {
      note.remove();
    } )

    const notesList = this.notes.getNotes();

    notesList.forEach( note => {
      const newNote = document.createElement("div")
      newNote.textContent = note
      newNote.className = "note";

      document.body.append(newNote)
    });
  }

  displayNotesFromAPI() {
    this.client.loadNotes( (data) => {
      this.notes.setNotes(data)
      this.displayNotes()
    })
  }

  noteToAPI() {
    const noteInput = document.querySelector('#note-input')
    const note = noteInput.value
    this.client.createNote(note, () => {
      this.notes.setNotes(note)
      this.displayNotes()
    })
  }

}

module.exports = NotesView;