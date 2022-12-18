const footer = document.querySelector("#footer")
console.log(footer)

footer.addEventListener('click', function() {
    console.log('click')
    footer.classList.toggle('footerDay')
    footer.classList.toggle('footerNight')
})

let btnRed = document.querySelector('#btnRed');
let btnBlue = document.querySelector('#btnBlue');
let btnGreen = document.querySelector('#btnGreen');
let content = document.querySelector('p');

btnRed.addEventListener('click',() => content.style.color = 'Red');
btnBlue.addEventListener('click',() => content.style.color = 'Blue');
btnGreen.addEventListener('click',() => content.style.color = 'Green');
 

const toggleButton = document.getElementById('toggle-button');
const hiddenText = document.getElementById('hidden-text');

toggleButton.addEventListener('click', function() {
  if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'block';
  } else {
    hiddenText.style.display = 'none';
  }
});

const redButtons = document.querySelectorAll('btnRed');

redButtons.forEach(function(button) {
  button.style.backgroundColor = 'red';
});
