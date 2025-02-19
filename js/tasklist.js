const formTask = document.getElementById("add-task")
formTask.addEventListener("submit", (e) => {
  e.preventDefault()

  const addNewTask = document.getElementById("new-task")

  const search = { TheTask: addNewTask.value }
  console.log("valore", search)

  const cardWithTask = document.createElement("lul")
  cardWithTask.innerHTML = `
  <li onclick="lineThrough(event)">${search.TheTask}</li>
  <button onclick="deleteLi(event)">Elimina task</button>
  `

  const listTask = document.getElementById("lista")
  listTask.appendChild(cardWithTask)

  addNewTask.value = ""
})

const lineThrough = function (e) {
  console.log("Barra", e.target.parentElement)
  const pressedLi = e.target
  const strikethrough = pressedLi.parentElement
  strikethrough.classList.add("testo-barrato")
}
const deleteLi = function (e) {
  console.log("Barra", e.target.parentElement)
  const pressedButton = e.target
  const deleteButton = pressedButton.parentElement
  deleteButton.remove()
}
