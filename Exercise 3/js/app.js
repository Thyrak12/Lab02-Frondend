const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown','white'];
function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

function createElement(){
    const newChild = document.createElement('div');
    newChild.setAttribute('class', 'card');
    newChild.innerHTML = '<p>Hello</p><div class="card-footer"><button>Remove Card</button></div>';
    document.querySelector('.container').appendChild(newChild).style.backgroundColor = randomColor();
}


document.querySelector('button').addEventListener('click', () => {
    createElement();
});

document.querySelector('.container').addEventListener('click', ()  => {
    document.querySelector('.container').removeChild(event.target.parentElement.parentElement);
});