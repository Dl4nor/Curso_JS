const a15_items = document.querySelectorAll('.items .item')
const a15_title = document.querySelector('header h1')

for (let i=0; i<a15_items.length; i++){
    a15_items[i].remove()
}

a15_title.textContent = "Criando & Validando um Formulário"

// -------------------------- //

const a15_nameInput = document.querySelector('#name')
const a15_emailInput = document.querySelector('#email')
const a15_submitButton = document.querySelector('#submit-button')
const a15_msg = document.querySelector('#my-form .msg')
const a15_ulItems = document.querySelector('.items')


a15_submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const a15_nameValue = a15_nameInput.value
    const a15_emailValue = a15_emailInput.value

    if (a15_nameValue === '' || a15_emailValue === ''){    
        a15_msg.textContent = 'Please fill out the field!'
        // a15_msg.style.color = 'red'
        a15_msg.classList = 'error'

        setTimeout(() => {
            a15_msg.textContent = ""
            a15_msg.classList = ""
        }, 2000);

        return
    }

    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${a15_nameValue} <br> Email: ${a15_emailValue}`
    a15_ulItems.appendChild(li)

    a15_nameInput.value = ""
    a15_emailInput.value = ""

})