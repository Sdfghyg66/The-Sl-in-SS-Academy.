function sendMessage() {
    var nameInput = document.getElementById("name-input");
    var messageInput = document.getElementById("message-input");
  
    var name = nameInput.value.trim();
    var message = messageInput.value.trim();
  
    if (name === "" || message === "") {
      alert("Please enter your name and message.");
      return;
    }
  
    var chatWindow = document.getElementById("chat-window");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>" + name + ":</strong> " + message;
    chatWindow.appendChild(messageElement);
  
    messageInput.value = "";
  }
  