export default function reverseString(string){
  let reversedArray = []
  for(let i=0; i<= string.length-1; i++){
    let letter = string.slice(i, i+1)
    reversedArray.unshift(letter)
  }
  return reversedArray.join("");
}
