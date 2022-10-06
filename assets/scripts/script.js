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

// function generateFizzBuzz() {
  //   let startValue = parseFloat(document.querySelector('.starting-value').value)
  //   let endValue = parseFloat(document.querySelector('.ending-value').value)
  //   let generateAll = endValue - startValue + 1

  //  if(isNaN(parseFloat(generateAll))) {generateAll='';}
  //  document.querySelector('.div-elements').innerHTML = generateAll
  // }
  // generateButton = document.querySelector('.button-generate')
  // generateButton.addEventListener('click', generateFizzBuzz)
    



  // function generateFizzBuzz() {
  //   let startValue = parseFloat(document.querySelector('.starting-value').value)
  //   let endValue = parseFloat(document.querySelector('.ending-value').value)
  //   let elements = document.querySelector('.div-elements')
  //   let generateAll = ""
  //     for (i = startValue; i <= endValue; i++) {
  //       let div = document.createElement('div')
  //       if (isNaN(parseFloat(generateAll))) {
  //         generateAll = ''
  //         document.querySelector('.div-elements').innerHTML = generateAll
  //       }
  //       if (i % 3 === 0 && i % 5 === 0) {
  //         (div.innerHTML += "FizzBuzz = " + i) 
  //           div.classList.add('fizz-buzz')
  //         }
  //       else if (i % 3 == 0) {
  //         (div.innerHTML += "Fizz = " + i)
  //         div.classList.add('fizz') 
  //       }
  //       else if (i % 5 == 0) { 
  //         (div.innerHTML += "Buzz = " + i)
  //         div.classList.add('buzz')
  //       }
  //       else {
  //         (div.innerHTML = i) 
  //         div.classList.add('num')
  //       } 
  //       elements.appendChild(div)
  //   } }
  //   generateButton = document.querySelector('.button-generate')
  //   generateButton.addEventListener('click', generateFizzBuzz)






  // let inputStart = document.querySelector(".starting-value")
  // inputStart.addEventListener('input', () => {
  //   document.querySelector(".div-elements").innerHTML = inputStart.value
  
  // })

  // let inputEnd = document.querySelector(".ending-value")
  // inputEnd.addEventListener('input', () => {
  //   document.querySelector(".div-elements").innerHTML = inputEnd.value
  
  // })



