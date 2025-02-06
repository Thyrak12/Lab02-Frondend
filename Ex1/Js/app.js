//Move 3 to container2
document.getElementById('container2').appendChild(container1.children[2]);


//Remove 4
document.getElementById('container2').children[0].remove();

//Create block 10 to container3
const newChild = document.createElement('div');
newChild.textContent = '10';
newChild.className = 'item';
document.getElementById('container3').appendChild(newChild);

//Add red to containerBlue
const elements = document.querySelectorAll('.containerBlue');
elements.forEach(element => {
    element.style.color = 'red';
});

//







