document.getElementById('submit').addEventListener('click', function (){
  
  var nameInput = document.getElementById('name').value;
  var newPostName = document.createElement('p');
  var nameInputElement = document.createTextNode('Posted By: ' + nameInput);
  newPostName.appendChild(nameInputElement);

  var messageInput = document.getElementById('message').value;
  var newPostMessage = document.createElement('p');
  var messageInputElement = document.createTextNode(messageInput);
  newPostMessage.appendChild(messageInputElement);

  var postsDiv = document.querySelector('.posts');

  var newPosts = document.createElement('div');
  
  var newPostDivider = document.createElement('hr');


  newPosts.append(newPostMessage);
  newPosts.append(newPostName);
  newPosts.append(newPostDivider);

  postsDiv.append(newPosts);

});
