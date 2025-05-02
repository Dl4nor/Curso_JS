console.log("\n\n --- Array Functions ---")

const a4_numbers = [1, 2, 3, 4, 5]
const a4_ages = [8, 13, 27, 30, 22, 40]

function a4_multiplyNumbersBy2(number) {
    return number*2    
}

function a4_evenSeparator(number) {
    return number % 2 === 0
}

function a4_sumNumbers(number, accumulator){
    return accumulator + number
}

// map -> retorna o resultado da função para um novo array de mesmo index
const a4_numbersMult2 = a4_numbers.map(a4_multiplyNumbersBy2) 
const a4_testNumbers = a4_numbers.map(a4_evenSeparator)

// filter -> retorna para um novo array os resultados da função quando true 
const a4_evenAges = a4_ages.filter(a4_evenSeparator)

const a4_sumOfAges = a4_ages.reduce(a4_sumNumbers, 0)

console.log(a4_numbersMult2)
console.log(a4_evenAges)
console.log(a4_sumOfAges)

console.log(`\n${a4_evenSeparator(a4_ages[1])}`)
console.log(a4_testNumbers)
