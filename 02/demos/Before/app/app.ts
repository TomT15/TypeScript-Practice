function startGame(){
    var messagesElement = document.getElementById('message');
    messagesElement.innerHTML = 'Welcome to MultiMath! Starting a new game...';
}

document.getElementById('startGame').addEventListener('click', startGame);