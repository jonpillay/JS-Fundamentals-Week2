(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/models.js
  var require_models = __commonJS({
    "lib/models.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
        setNotes(notes2) {
          this.notes.push(notes2);
        }
      };
      module.exports = NotesModel2;
    }
  });

  // NotesView.js
  var require_NotesView = __commonJS({
    "NotesView.js"(exports, module) {
      var NotesModel2 = require_models();
      var NotesView2 = class {
        constructor(notesInstance, client2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.notes = notesInstance;
          this.client = client2;
          this.addNoteButton = document.querySelector("#add-note-button");
          this.getAPINotes = document.querySelector("#notes-from-api");
          this.notesToAPI = document.querySelector("#notes-to-api");
          this.getAPINotes.addEventListener("click", () => {
            this.displayNotesFromAPI();
          });
          this.addNoteButton.addEventListener("click", () => {
            this.addNote();
            this.displayNotes();
          });
          this.notesToAPI.addEventListener("click", () => {
            this.noteToAPI();
          });
        }
        addNote() {
          const noteInput = document.querySelector("#note-input");
          const note = noteInput.value;
          this.notes.addNote(note);
          noteInput.value = "";
        }
        displayNotes() {
          const notes2 = document.querySelectorAll(".note");
          notes2.forEach((note) => {
            note.remove();
          });
          const notesList = this.notes.getNotes();
          notesList.forEach((note) => {
            const newNote = document.createElement("div");
            newNote.textContent = note;
            newNote.className = "note";
            document.body.append(newNote);
          });
        }
        displayNotesFromAPI() {
          this.client.loadNotes((data) => {
            this.notes.setNotes(data);
            this.displayNotes();
          });
        }
        noteToAPI() {
          const noteInput = document.querySelector("#note-input");
          const note = noteInput.value;
          this.client.createNote(note, () => {
            this.notes.setNotes(note);
            this.displayNotes();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // client.js
  var require_client = __commonJS({
    "client.js"(exports, module) {
      var Client2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(data, callback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": data })
          }).then((data2) => {
            console.log(data2);
          }).then((data2) => {
            callback(data2);
          });
        }
      };
      module.exports = Client2;
    }
  });

  // index.js
  var NotesModel = require_models();
  var NotesView = require_NotesView();
  var Client = require_client();
  var notes = new NotesModel();
  var client = new Client();
  var view = new NotesView(notes, client);
})();
