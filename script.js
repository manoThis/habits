//Variavel para receber o formulário
const form = document.querySelector("#form-habits")
//Criando de um objeto com função do formulario (Com regras de formulário)
const nlwSetup = new NLWSetup(form)

//Inserção dos dados (seleções) de forma manual
// const data = {
//   correr: ["02-01", "09-01", "16-01"],
//   dormir: ["02-01", "09-01", "16-01"],
//   nadar: ["02-01", "09-01"],
// }

//Criando objeto para o botão e atribuinod a função de adicionar
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener("change", save)

//Função ao adicionar no botão
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //dia manual:
  //const today = "02/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Data " + today + " já esta inclusa!")
    return
  }
  alert("Data " + today + " adicionada com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//Setando os dados para a função que foram digitados
nlwSetup.setData(data)
//Carregar os dados na div
nlwSetup.load()
