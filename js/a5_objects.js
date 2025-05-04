console.log("\n\n --- Objetos ---")

const a5_person = {
    firstName: "Ronald",
    lastName: "V Silva",
    age: "21",
    hobbies: ["Jogar video-game", "Assistir animes", "Jogar Basquete"],
    dog: {
        name: "Boby",
        age: 9
    },
}

// const a5_pFirstName = a5_person.firstName
// const a5_pLastName = a5_person.lastName
// const a5_pAge = a5_person.age
// const a5_pHobbies = a5_person.hobbies

// Mesmo que acima
const { firstName: a5_pFirstName, lastName: a5_pLastName, age: a5_pAge, hobbies: a5_pHobbies, dog: { name: a5_dogName } } = a5_person
const watch = a5_person.hobbies[1]

console.log(a5_pFirstName)
console.log(a5_pLastName)
console.log(a5_pAge)
console.log(a5_pHobbies)

// a5_person.dog = "boby"

console.log(a5_person.dog.age)
console.log(a5_dogName)