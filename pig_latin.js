'use strict'

let pigLatin = (word) =>
{
  debugger
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter))
  {
    return word
  }else
  {
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) =>
{
  return (/^[aeiou]$/i).test(char);
}

let convert = function(sentence)
{
  let result = []
  let words = sentence.trim().split(',')
  for (let i=0;i<words.length;i++)
  {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
let input = process.argv.slice(2).toString();
console.log(convert(input));
