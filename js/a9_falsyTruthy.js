console.log("\n\n --- Truthy Falsy ---")

const a9_x = ''
console.log(!!a9_x)
// False

const a9_y = 0
console.log(!!a9_y)
// False

const a9_a = null
console.log(!!a9_a)
// False

const a9_b= undefined
console.log(!!a9_b)
// False

const a9_list = []
console.log(!!a9_list)
// True
console.log(!!a9_list.length)
// False

const a9_obj = {}
console.log(!!a9_obj)
// True
console.log(!!a9_obj.length)
// False
