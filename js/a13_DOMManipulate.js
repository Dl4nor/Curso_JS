const a13_items = document.querySelector(".items")
const a13_title = document.querySelector("header h1")
const a13_button = document.querySelector(".btn")
const a13_addUser = document.getElementById("add-user")

a13_title.textContent = "Modificando elementos do DOM"

// a13_items.remove()

// a13_items.firstElementChild.remove()
// a13_items.lastElementChild.remove()

console.log(a13_items.children) // retorna um HTMLCollection
console.log(a13_addUser)

a13_items.children[0].textContent = "Primeiro item"

// for (let item of a13_items.children){
//     item.textContent= "aaa"
// }

for (let i=0;i<a13_items.children.length; i++){
    if (i === 1){
        a13_items.children[i].textContent = `${i+1}: item`
    }
}

// Array.from(a13_items.children).forEach(element => {
//     element.textContent = "aaa"
// });

// Essas são as formas de manipular elementos utilizando 
//  o loop 'for' o problema de um HTMlCollection é que 
//  não é possível manipulá-lo direamente por meio de 
//  um forEach. Porém, é possível fazer isso convertendo-o 
//  para um Array, com Array.from()


a13_items.lastElementChild.innerHTML = "<h1> Hello World! </h1>"

a13_button.style.background = "red"
a13_button.style.color = "yellow"
a13_addUser.style.background = "green"

// Uma desvantagem do querySelector:
// Aparentemente, tanto ele quanto getElement retornam
//  a mesma coisa, uma tag HTML. Porém, utilizando getElement
//  o VSCode consegue "auto-completar" .style e provávelmente 
//  outras funções, que com querySelector não são "auto-completadas" 


