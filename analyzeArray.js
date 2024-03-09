
function analyzeArray(Array){
  let array = Array;
  let average = averageArray(array)
  let min = minimum(array)
  let max = maximum(array)
  let length = array.length
  return {average, min, max, length}
}

let averageArray = function averageArray(array){
  let sum = 0
  for(let i = 0; i<=array.length-1; i++){
    sum = sum+array[i]
  }
  return (sum/array.length)
}

function minimum(array){
  let element = array[0];
  for (let i = 0; i <= array.length-1; i++) {
    if(element>=array[i]){
      element = array[i]
    } 
  }
  return element
}

function maximum(array){
  let element = array[0]
  for (let i = 0; i < array.length; i++) {
    if(element<=array[i])
    element = array[i];
  }
  return element
}




export default analyzeArray