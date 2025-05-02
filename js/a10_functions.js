console.log("\n\n --- Functions ---")

function a10_sum(a, b=10, c) {
    return a+b*c
}

const a10_sumArrow = (a, b=10, c) => {
    return a+b+c
}

const a10_sumArrow2 =(a, b=10, c) => a+b+c

const a10_sumValue1 = a10_sum(10, 10, 0) // Em js, os operadores seguem a ordem matemática
const a10_sumValue2 = a10_sumArrow(10, 20, 30)
const a10_sumValue3 = a10_sumArrow2(a=20, c=30)
// Isso não funciona em js puro ↑
// Valores devem ser atrelados a todos os parâmetros da função

console.log(a10_sumValue1)
console.log(a10_sumValue2)
console.log(a10_sumValue3)
