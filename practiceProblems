
let keyString = 'a string'
let keyObj = {}
let keyFunc = function() {}

//setting the values
let myMap = new Map()
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

//getting the values
let size = myMap.size
let valStr = myMap.get(keyString)
let isKeyExist = myMap.has('a string')

for (let [key, value] of myMap) console.log("loop1: " +key+ ' = ' + value)
for (let [key, value] of myMap.entries()) console.log("loop2: " +key+ ' = ' +value)
for (let key of myMap.keys()) console.log("loop3: " +key)
for (let value of myMap.values()) console.log("loop4: " +value)

//Merge two Maps. the last repeated key wins
//Spread operator essentially converts a map to an array
let first = new Map([[1, 'one'],[2,'two'],[3, 'three']])
let second = new Map([[1,'uno'] ,[2, 'dos']])
let merged = new Map([...first,...second, [1, 'eins']])

let hasKey = merged.has(1)
let delKey = merged.delete(1)
if (merged.has(1)) console.log(merged.get(1)) // uno
console.log("Pos2: " +merged.get(2)) //dos
merged.clear();
console.log(merged.size)
