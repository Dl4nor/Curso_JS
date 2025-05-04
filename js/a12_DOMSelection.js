console.log("\n\n --- selecionando elementos do DOM ---")

// Selecionar apenas um elemento do DOM
const a12_adduserText = document.getElementById("add-user")
const a12_myItem = document.querySelector(".items")
// Para querySelector, podemos selecionar elementos pela classe, com '.'
// ou pelo id, com '#'. Assim como podemos misturar ambos e buscar por um
// item que esteja dentro de uma classe com um id específico, como por exemplo:
const a12_myForm = document.querySelector(".container #my-form")

console.log(a12_adduserText)
console.log(a12_myItem)
console.log(a12_myForm)

// Selecionando múltiplos elementos
const a12_allItems = document.querySelectorAll(".item")
// No geral, a melhor opção sempre será utilizar querySelector, por retornar
// uma lista de elementos. 
// Enquanto getElement sempre retornará um hTMLCollection
const a12_allItemsBCN = document.getElementsByClassName("item")
const a12_allItemsEBTN = document.getElementsByTagName("li")

console.log(a12_allItems)
console.log(a12_allItemsBCN)
console.log(a12_allItemsEBTN)

// Por exemplo, com uma lista de elementos eu posso selecionar
// um elemento diretamente pelo seu index, da seguinte maneira:
console.log(a12_allItems[2]) 