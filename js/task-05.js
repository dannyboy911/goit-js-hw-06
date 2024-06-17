const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', function () {
    const newName = inputName.value.trim();
    if (newName === '') {
        outputName = 'Anonymous';
    } else {
        outputName.textContent = newName;
    }
});