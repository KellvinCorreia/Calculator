let display = document.querySelector('.display');

function insert(num) {
  display.innerHTML += num;
}
function clean() {
  display.innerHTML = '';
}
function backspace() {
  if (display.textContent) {
    let displayResult = document.querySelector('.display').innerHTML;
    display.innerHTML = displayResult.substring(0, displayResult.length - 1);
  }
}
function result() {
  if(display.textContent != 'Erro')
  display.innerHTML = parseFloat(eval(display.innerHTML).toFixed(10))
}