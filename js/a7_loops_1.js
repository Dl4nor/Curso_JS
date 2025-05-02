console.log("\n\n --- Loops For & While ---")

for (let i=1; i<=20; i++){
    console.log(i)
}

const a7_cars = ["Ferrari", "Tesla", "Mercedes"]

for (let i=0; i<a7_cars.length; i++){
    console.log(a7_cars[i])
}

for (let car of a7_cars){
    console.log(car)
}

function a7_logCars(car, index){
    console.log(index)
    console.log(car)
}

a7_cars.forEach(a7_logCars)