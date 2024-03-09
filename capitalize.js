export default function capitalize(string){
  let firstLetter = string.slice(0, 1).toUpperCase()
  let restLetters = string.slice(1)
  return firstLetter+restLetters
}