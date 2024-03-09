export default function caesarCipher(string, shiftFactor){
  let array = []
  let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for(let i = 0; i<=string.length-1; i++){
    let letter = string.slice(i, i+1);
    if(alphabets.includes(letter)){
      let index = alphabets.findIndex       ((alphabet)=>{
        return alphabet == letter
      })
      let shiftedIndex = index+shiftFactor;
      if(shiftedIndex>25){
        shiftedIndex = shiftedIndex-26
      }
      array.push(alphabets[shiftedIndex])
    }else{
      array.push(letter)
    }
  }
  return array.join("")
}