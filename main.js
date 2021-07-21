var button = document.getElementById('submit')

button.addEventListener('click', function (){
  
  var nameInput = document.getElementById("name").value;
  var messageInput = document.getElementById("message").value;

  var postsDiv = document.querySelector('.post');
  var newPosts = document.createElement('div');

  
  var newPostName = document.createElement('p');
  var nameInputElement = document.createTextNode('Posted by: ' + nameInput);
  newPostName.appendChild(nameInputElement);

  
  var newPostMessage = document.createElement('p');
  var messageInputElement = document.createTextNode(messageInput);
  newPostMessage.appendChild(messageInputElement);

  newPosts.append(newPostName);
  newPosts.append(newPostMessage);

});

