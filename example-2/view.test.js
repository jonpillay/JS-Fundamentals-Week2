/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
});
describe('Page view', () => {
  it('displays 3 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    view.addParagraph("Foo bar, boo!")

    expect(document.querySelectorAll('p').length).toBe(3);
  });
});
describe('Page view', () => {
  it('displays 0 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    view.addParagraph("Foo bar, boo!")

    view.clearParagraphs()

    expect(document.querySelectorAll('p').length).toBe(0);
  });
});