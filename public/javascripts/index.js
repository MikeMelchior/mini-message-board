const container = document.querySelector('.container');

function scrollToBottom() {
    const bottomElement = container.lastElementChild;
    bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

document.onload = scrollToBottom();

const nameField = document.getElementById('name');
const message = document.getElementById('message');

nameField.value == '' ? nameField.focus() : message.focus()

