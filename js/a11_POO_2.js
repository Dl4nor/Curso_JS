class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} made some noise!`)
    }
}
class Dog extends Animal {
    constructor(name){
        super(name)
    }
    
    // A classe filha herda o método do pai automaticamete
    // Porém, também é possível modificar um método já 
    // existente no pai, dessa forma:
    speak() {
        console.log(`${this.name} barked!`)
    }
}

class Frog extends Animal {
    constructor(name){
        super(name)
    }

    speak() {
        console.log(`${this.name} croaked!`)
    }
}

const a11_animal = new Animal("Simba")
const a11_dog = new Dog("Boby")
const a11_frog = new Frog("Coach")

a11_animal.speak()
a11_dog.speak()
a11_frog.speak()