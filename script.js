class Message {
  constructor(ad, vaxt, metn) {
    this.ad = ad;
    this.vaxt = vaxt;
    this.metn = metn;
  }

  toHtml() {
    const messageBox = document.getElementById("messageBox");
    const p = document.createElement("p");
    p.innerHTML = `${this.vaxt} ${this.ad}: ${this.metn} </b>`;
    messageBox.append(p);
  }
}

class Messenger {
  constructor() {
    this.messages = [];
  }

  show_history() {
    this.messages.shift().toHtml();
  }

  send(ad, text) {
    this.messages.push(new Message(ad, this.gettime(), text));
  }

  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
}

let messenger = new Messenger();
const inputName = document.getElementById("inputName");
const inputMsg = document.getElementById("inputMsg");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
  messenger.send(inputName.value, inputMsg.value);
  messenger.show_history();
  inputMsg.value = "";
});
