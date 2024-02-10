// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1 

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterClick)

// funcões
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
  }

  if(inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Escolha um número entre 0 e 10!")
    inputNumber.value = ""
    return
  }
  
  if(inputNumber.value == "") {
    alert("Você precisa adicionar um número antes!")
    return
  }

  inputNumber.value = ""
  attempts++
}

function handleResetClick () {
  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleEnterClick () {
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}