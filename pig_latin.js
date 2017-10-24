'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0)(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
let baru = process.argv.slice(2)
console.log(pigLatin(baru))
// let result = ""

// for(var i = 0; i < baru.length;i++){
//   result += pigLatin(baru[i]) + " "
// }

// console.log(result)