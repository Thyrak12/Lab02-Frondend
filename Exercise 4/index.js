function comparePassword() {
    const x = document.getElementById('passwordInput').value;
    const password = '123';
    if (x == password) {
        alert('Password is correct');
    }
    else {
        alert('Password is incorrect');
    }
};

document.getElementById('checkButton').addEventListener('click', comparePassword);

