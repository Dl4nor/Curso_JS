console.log("\n\n --- Arrays ---")

const a3_names = ["Felipe", "João", "Júlia", 10, false];

const a3_joao = a3_names[1];

a3_names.push("Pedro");
a3_names.unshift("Fernandoa");

a3_names.pop();
a3_names.pop();
a3_names.pop();

a3_names[3] = "Gustavo";

const a3_indexOfFelipe = a3_names.indexOf("Felipe");

const a3_sortedNames = a3_names.sort();

const a3_namesIsArray = Array.isArray(a3_names);

console.log(a3_names);
console.log(a3_sortedNames);
console.log(a3_namesIsArray);