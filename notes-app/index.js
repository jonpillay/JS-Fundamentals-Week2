const NotesModel = require('./lib/models');
const NotesView = require('./NotesView');
const Client = require('./client')

const notes = new NotesModel();

const client = new Client();

const view = new NotesView(notes, client);