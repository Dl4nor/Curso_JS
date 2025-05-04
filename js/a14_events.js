const a14_button = document.querySelector(".btn")
const a14_myForm = document.querySelector("#my-form")
const a14_nameBox = document.querySelector("#name")
const a14_emailBox = document.querySelector("#email")

const a14_items = document.querySelectorAll(".items .item")

const a14_body = document.querySelector("body")


a14_button.addEventListener('click', function a14_onBtnClick(e) {
    e.preventDefault() // Previne o submit

    const a14_nameValue = a14_nameBox.value
    const a14_emailvalue = a14_emailBox.value

    if ( a14_nameValue === '' || a14_emailvalue === ''){
        return alert("Preencha todos os campos do site!")
    }

    a14_myForm.style.background = "green"

    a14_items[0].textContent = a14_nameValue
    a14_items[1].textContent = a14_emailvalue

    a14_body.style.background = "purple"
})