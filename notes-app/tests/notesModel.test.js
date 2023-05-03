const NotesModel = require('../lib/models.js')

describe('NotesModel', () => {
  describe('NoteModel initialises and returns empty list of notes', () => {
    it('returns []', () => {
      notes = new NotesModel()
      result = notes.getNotes()
      expect(result).toEqual([])
    });
  });
  describe('NoteModel initialises adds notes and returns notes when called', () => {
    it('returns []', () => {
      notes = new NotesModel()
      notes.addNote('Buy milk');
      notes.addNote('Go to the gym');
      result = notes.getNotes()
      expect(result).toEqual(['Buy milk', 'Go to the gym'])
    });
  });
  describe('NoteModel initialises adds notes, resets and returns the empty list', () => {
    it('returns []', () => {
      notes = new NotesModel()
      notes.addNote('Buy milk');
      notes.addNote('Go to the gym');
      notes.reset();
      result = notes.getNotes()
      expect(result).toEqual([])
    });
  });
});