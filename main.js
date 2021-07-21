var button = document.getElementById=("submit")[0];

button.addEventListener('click', function (){

  var nameInput = document.getElementById("name")[0].value;
  var newName = document.createElement("newName");
  var nameInputElement = document.createTextNode(nameInput);

  var messageInput = document.getElementById("message")[0].value;
  var newMessage = document.createElement(newMessage);
  var messageInputElement = document.createTextNode(messageInput);

  newName.appendChild(nameInput);
  newMessage.appendChild(messageInput);

  document.getElementsByClassName("submissionName",)[0].append(newName);
  document.getElementsByClassName("submissionMessage",)[0].append(newMessage);

});