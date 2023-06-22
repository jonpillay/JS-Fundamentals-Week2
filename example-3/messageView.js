class MessageView {
  constructor() {
    this.showButton = document.querySelector('#show-message-button');

    this.showButton.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButton = document.querySelector('#hide-message-button');

    this.hideButton.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const formMessage = document.querySelector('#message-input')
    const message = document.createElement("div")
    message.textContent = formMessage.value
    message.setAttribute("id", "message");

    document.body.append(message)
  }

  hideMessage() {
    const allMessages = document.querySelectorAll('[id = message]')

    allMessages.forEach( message => {
      message.remove()
    })
  }
}

module.exports = MessageView;