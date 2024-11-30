const textElement = document.createElement('div');
textElement.textContent = 'im in your walls :3';
textElement.style.position = 'fixed';
textElement.style.top = '50%';
textElement.style.left = '50%';
textElement.style.transform = 'translate(-50%, -50%)';
textElement.style.fontSize = '40px';
textElement.style.fontWeight = 'bold';
textElement.style.backgroundClip = 'text';
textElement.style.webkitBackgroundClip = 'text';
textElement.style.color = 'transparent';
textElement.style.padding = '10px';

// Apply rainbow gradient effect
textElement.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
textElement.style.animation = 'rainbow 5s infinite linear';

// Make the text draggable
let offsetX, offsetY;
textElement.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - textElement.getBoundingClientRect().left;
    offsetY = e.clientY - textElement.getBoundingClientRect().top;
    
    const onMouseMove = (moveEvent) => {
        textElement.style.left = moveEvent.clientX - offsetX + 'px';
        textElement.style.top = moveEvent.clientY - offsetY + 'px';
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Add the text to the body
document.body.appendChild(textElement);

// Add keyframes for rainbow animation
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes rainbow {
    0% { background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); }
    100% { background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red); }
}
`;
document.head.appendChild(styleSheet);
