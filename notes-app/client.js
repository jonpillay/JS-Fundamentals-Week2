class Client {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }

  createNote(data, callback) {
    fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"content": data})

    }).then(data => {
      console.log(data)
    }).then(data => {
      callback(data)
    })
  }
}

module.exports = Client;