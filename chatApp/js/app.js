// function appMessenger(client, server, Figma) {
//     this.client = client;
//     this.server = server;
//     this.Figma = Figma;
// }
//
// let message1 = new appMessenger("asBank", "centinel", "architecture");
// let message2 = new appMessenger("utBank", "Ugo", "design");
// let messaage3 = new appMessenger("global", "DMZ", "logical");
//
// console.log("message: "+ message1.client + " = "+ message1.server);
const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const chatMessageElement = (message) =>
<div class= "message ${message.sender === 'Stybo' ? 'blue-bg' : 'gray-bg'}">
  <div class= "message-sender">${message.sender}</div>
  <div class= "message-text">${message.text}</div>
  <div class= "message-timestamp">${message.timestamp}</div>
</div>


let messageSender = 'John';
const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here, ${messageSender}`
}
if (name === 'John'){
  johnSelectorBtn.classList.add('active-person')
  janeSelectorBtn.classList.remove('active-person')
}

if (name === 'Mimi'){
  styboSelectorBtn.classList.add('active-person')
  mimiSelectorBtn.classList.add('active-person')
}

styboSelectorBtn.onclick = () => updateMessageSender('Stybo')
mimiSelectorBtn.onclick =  () => updateMessageSender('Mimi')
const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleDateString('en-Us', {hour: 'numeric', minute: 'numeric', hour12: true})
  const message = {
    sender: '',
    text: chatInput.value,
    timestamp,
  }
}
