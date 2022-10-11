const clearButton = document.querySelector('.button-clear')
const refreshButton = document.querySelector('.button-refresh')

const inputMin = document.querySelector('.starting-value')
const inputMax = document.querySelector('.ending-value')

clearButton.addEventListener('click', removeElements)
refreshButton.addEventListener('click', refreshPage)

inputMin.addEventListener('change', () => {
  minVal = inputMin.value
  redraw();
})

inputMax.addEventListener('change', () => {
  maxVal = inputMax.value
  redraw();
})

let minVal = 1;
let maxVal = 100;


window.addEventListener('load', () => {
  redraw();
})

function removeElements() {
  const elements = document.querySelectorAll('.div-elements > div')
  elements.forEach(element => {
    element.remove()
  })
}

function refreshPage () {
  location.reload()
}

function redraw() {

  removeElements();

  let divElements = document.querySelector('.div-elements')
  for (let i = minVal; i <= maxVal; i++) {
    let div = document.createElement('div')
    if (i % 3 === 0 && i % 5 === 0) {
      (div.innerHTML += "FizzBuzz = " + i) 
        div.classList.add('fizz-buzz')
      }
    else if (i % 3 == 0) {
      (div.innerHTML += "Fizz = " + i)
      div.classList.add('fizz') 
    }
    else if (i % 5 == 0) { 
      (div.innerHTML += "Buzz = " + i)
      div.classList.add('buzz')
    }
    else {
      (div.innerHTML = i) 
      div.classList.add('num')
    } 
    divElements.appendChild(div)
} 
}





