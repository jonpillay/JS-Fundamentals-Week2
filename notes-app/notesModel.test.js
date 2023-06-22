/**
 * @jest-environment jsdom
 */

const NotesView = require('./NotesView.js');
const NotesModel = require('./lib/models.js')
const fs = require('fs');


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
  describe('NoteModel initialises adds a note and then displays it on the webpage', () => {
    it('returns the updated length of the HTML element we are targetting', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notes = new NotesModel();

      const view = new NotesView(notes);

      const input = document.querySelector('#note-input')

      input.value = "This is my test note"

      const button = document.querySelector('#add-note-button')

      button.click()

      const result = document.querySelectorAll('div.note').length

      expect(result).toEqual(1)
    });
  });
  describe('it clears the notes display before adding more', () => {
    it('returns the cleared length', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notes = new NotesModel();

      const view = new NotesView(notes);

      const input = document.querySelector('#note-input')

      input.value = "This is my test note"

      const button = document.querySelector('#add-note-button')

      button.click()

      input.value = "This is another test note"

      button.click()

      const result = document.querySelectorAll('div.note').length

      expect(result).toEqual(2)
    });
  });
  describe('it clears the input display after submission', () => {
    it('returns the cleared length', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notes = new NotesModel();

      const view = new NotesView(notes);

      const input = document.querySelector('#note-input')

      input.value = "This is my test note"

      const button = document.querySelector('#add-note-button')

      button.click()

      input.value = "This is another test note"

      button.click()

      const result = input.value

      expect(result).toEqual("")
    });
  });
});