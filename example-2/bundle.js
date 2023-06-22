(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
          this.secondParagraph = document.querySelector("#second-paragraph");
          console.log(this.secondParagraph);
          this.secondParagraph.textContent = "Bohoo ha Boo Boo. Foo!";
        }
        addParagraph(content) {
          const newPara = document.createElement("p");
          newPara.innerText = content;
          document.body.append(newPara);
        }
        clearParagraphs() {
          const allParas = document.querySelectorAll("p");
          allParas.forEach((para) => {
            para.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph("This content is brought to you by the magic of JavaScript!");
})();
