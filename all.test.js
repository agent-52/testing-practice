import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";
import calculator from "./calculator.js";
import caesarCipher from "./caesarCipher.js";
import analyzeArray from "./analyzeArray.js"

test("first letter was capitalized", ()=>{
  expect(capitalize("abhay")).toBe("Abhay")
})

test("reverse the string", ()=>{
  expect(reverseString("abhay")).toBe("yahba")
})

test("calculator works", ()=>{
  expect(calculator.add(5, -1)).toBe(4)
  expect(calculator.subtract(5, -1)).toBe(6)
  expect(calculator.divide(6, 2)).toBe(3)
  expect(calculator.multiply(6, 2)).toBe(12)
})

test("character shifting", ()=>{
  expect(caesarCipher("abhay", 3)).toBe("dekdb")
 
  expect(caesarCipher("ab,hay", 2)).toBe("cd,jca")
  expect(caesarCipher("g", 1)).toBe("h")
  expect(caesarCipher("zyxwvutsrqponmlkjihgfedcba", 1)).toBe("azyxwvutsrqponmlkjihgfedcb")
})

test("analyze array", ()=>{
  const object = analyzeArray([1,8,3,4,2,6])
  expect(object.average).toBe(4)
  expect(object.min).toBe(1)
  expect(object.max).toBe(8)
  expect(object.length).toBe(6)
})