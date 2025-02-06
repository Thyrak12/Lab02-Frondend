function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const y = document.querySelector('button');
y.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
    document.querySelector('#result-color').textContent = getRandomHexColor();
});





