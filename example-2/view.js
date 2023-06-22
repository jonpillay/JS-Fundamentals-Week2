class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);

    this.secondParagraph = document.querySelector('#second-paragraph');

    console.log(this.secondParagraph);

    this.secondParagraph.textContent = "Bohoo ha Boo Boo. Foo!"
  }

  addParagraph(content) {
    const newPara = document.createElement("p");

    newPara.innerText = content

    document.body.append(newPara)
  }

  clearParagraphs() {
    const allParas = document.querySelectorAll('p')

    allParas.forEach( para => {
      para.remove();
    })
  }
}

module.exports = View;