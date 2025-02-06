const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'white'];
function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

function isPrioritize() {
    const prio = document.querySelector('#prio').value;
    if (prio === 'high') {
        return 'red';
    }
    else {
        return 'gray';
    }
}

function createElement() {
    const task = document.querySelector('#taskInput').value;
    const newChild = document.createElement('div');
    newChild.setAttribute('class', 'card');
    newChild.innerHTML = '<p>' + task + '</p>';
    document.querySelector('.container').appendChild(newChild).style.backgroundColor = isPrioritize();

}


document.querySelector('#addTaskButton').addEventListener('click', () => {
    createElement();
});


document.querySelector('#important').addEventListener('click', () => {
    const container = document.querySelector('.container');
    const children = Array.from(container.children); // Convert to an array
    children.forEach(element => {
        element.style.display = 'block';
    });
    children.forEach(element => {
        if (element.style.backgroundColor !== 'red') {
            element.style.display = 'none';
        }
        if (element.style.backgroundColor === 'red') {
            element.style.display = 'display';
        }
    });

});
document.querySelector('#notImportant').addEventListener('click', () => {
    const container = document.querySelector('.container');
    const children = Array.from(container.children); // Convert to an array
    children.forEach(element => {
        element.style.display = 'block';
    });
    children.forEach(element => {
        if (element.style.backgroundColor !== 'gray') {
            element.style.display = 'none';
        }
        if (element.style.backgroundColor === 'gray') {
            element.style.display = 'display';
        }
    });
});
document.querySelector('#showAll').addEventListener('click', () => {
    const container = document.querySelector('.container');
    const children = Array.from(container.children);
    children.forEach(element => {
        element.style.display = 'block';
    });
});

