/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });
  it('clicks the button to show and then hide the messages', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');

    const messageInput = document.querySelector('#message-input')

    messageInput.value = "Do Not Panic, This is a Test. Also... PANIC!"

    buttonEl.click();

    expect(document.querySelector('#message').textContent).toEqual("Do Not Panic, This is a Test. Also... PANIC!");
  });
});