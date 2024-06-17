let counterValue = 0;
const valueOfSpan = document.getElementById('value');
const incrementing = document.querySelector('[data-action="increment"]');
const decrementing = document.querySelector('[data-action="decrement"]');

incrementing.addEventListener('click', function(){
    counterValue++;
    valueOfSpan.textContent = counterValue;
    incrementing.disabled = true;
    alert("Woah, Hold yo horses, partner! Clicking too fast.");
    setTimeout(function () {
        incrementing.disabled = false;
    }, 1000);
});

decrementing.addEventListener('click', function(){
    counterValue--;
    valueOfSpan.textContent = counterValue;
    decrementing.disabled = true;
    alert("Woah, Hold yo horses, partner! Clicking too fast.");
    setTimeout(function () {
        decrementing.disabled = false;
    }, 1000);
});