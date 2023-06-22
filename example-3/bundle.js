(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.showButton = document.querySelector("#show-message-button");
          this.showButton.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButton = document.querySelector("#hide-message-button");
          this.hideButton.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const formMessage = document.querySelector("#message-input");
          const message = document.createElement("div");
          message.textContent = formMessage.value;
          message.setAttribute("id", "message");
          document.body.append(message);
        }
        hideMessage() {
          const allMessages = document.querySelectorAll("[id = message]");
          allMessages.forEach((message) => {
            message.remove();
          });
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
