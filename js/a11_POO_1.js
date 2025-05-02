console.log("\n\n --- POO ---")

class a11_Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

    // Métodos estáticos podem ser acessados pela classe sem que 
    // ela seja instanciada
    // Além de que, o método estático não podem acessar parâmetros 
    // da própria classe (this.)
    static speak(){
        console.log("Hello world!")
    }
}

const a11_person = new a11_Person("Jane", "Doe", 30)

console.log(a11_person)
a11_person.getFullName()

a11_Person.speak()