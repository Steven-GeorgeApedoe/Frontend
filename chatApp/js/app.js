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
// let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1 ]);
// console.log(set.size)
//
// const car = (brandName, modelYear, color, energyConsumptionType) => {
//   this.brandName = brandName;
//   this.modelYear = modelYear;
//   this.color = color;
//   this.energyConsumptionType = energyConsumptionType
// }
//
// const first_car = new car('lexus', 2017, 'black', 'fuel')
// const second_car = new car('BMW', 2020, 'red', 'electric')
// const third_car = new car('Mercedes-Benz', 2023, 'blue', 'electric')
// //OR
//
//
// const material = {
//   brandName: 'Dior',
//   materialBed: 'leather',
//   colorBed: 'wine crimson'
// };
// const { brandName, materialBed, colorBed} = material


const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const createChatMessageElement = (message) => '<div class= "message ${message.sender === \'John\' ? \'blue-bg\' : \'gray-bg\'}">\n' +
  '  <div class= "message-sender">${message.sender}</div>\n' +
  '  <div class= "message-text">${message.text}</div>\n' +
  '  <div class= "message-timestamp">${message.timestamp}</div>\n' +
  '</div>\n'


let messageSender = 'John';
const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here,${messageSender}`

  if (name === 'John'){
    johnSelectorBtn.classList.add('active-person')
    janeSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Jane'){
    janeSelectorBtn.add('active-person')
    johnSelectorBtn.classList.remove('active-person')
  }
  chatInput.focus()
}

johnSelectorBtn.onclick = () => updateMessageSender('John')
janeSelectorBtn.onclick =  () => updateMessageSender('Jane')
const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleDateString('en-Us', {hour: 'numeric', minute: 'numeric', hour12: true})
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }
  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))
  chatMessages.innerHTML += createChatMessageElement(message)
  chatInputForm.reset()
  chatMessages.scrollTop = chatMessages.scrollHeight
}
chatInputForm.addEventListener('submit', sendMessage)
