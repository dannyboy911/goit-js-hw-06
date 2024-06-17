const input = document.getElementById('validation-input');

input.addEventListener('blur', function () {
    const expectedInputLength = parseInt(input.getAttribute('data-length'), 10);
    const enteredInputLength = input.value.length;

    if (expectedInputLength === enteredInputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});