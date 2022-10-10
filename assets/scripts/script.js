window.addEventListener('load', () => {
  let divElements = document.querySelector('.div-elements')
    for (let i = 1; i <= 100; i++) {
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





  const removeElements = () => {
    const element = document.querySelector('.div-elements');
    element.remove();
  }
  clearButton = document.querySelector('.button-clear')
  clearButton.addEventListener('click', removeElements)



  const refreshButton = document.querySelector('.button-refresh')
  const refreshPage = () => {
    location.reload()
  }
  refreshButton.addEventListener('click', refreshPage)

})

