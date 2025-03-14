// chat page 
// Function to send user message
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message !== '') {
        // Add user message
        addMessage(message, 'sent');
        input.value = '';

        // Simulate bot response after 1 second
        setTimeout(() => {
            addMessage(`You said: ${message}`, 'received');
        }, 1000);
    }
}

// Function to add a message to the chat
function addMessage(text, type) {
    const chatBox = document.getElementById('chatBox');

    // Create message container
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);

    // Create icon element
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = type === 'sent' ? 'U' : 'B';

    // Create text element
    const textElement = document.createElement('div');
    textElement.textContent = text;

    // Append elements
    messageElement.appendChild(icon);
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle "Enter" key to send message
document.getElementById('chatInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// chat page 
// chat page 