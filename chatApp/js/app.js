const styboSelectorBtn = document.querySelector('#stybo-selector')
const ishaSelectorBtn = document.querySelector('#mimi-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('chat-messages')
const chatInputForm = document.querySelector('chat-input-form')
const chatInput = document.querySelector('chat-input')
const clearChatBtn = document.querySelector('clear-chat-button')

const chatMessageElement = (message) => 
<div class= "message ${message.sender === 'Stybo' ? 'blue-bg' : 'gray-bg'}">
<div class= "message-sender">${message.sender}</div>
<div class = "messsage-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>



