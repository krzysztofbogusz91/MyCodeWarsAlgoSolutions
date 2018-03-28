// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !


function pigIt(str){
  return str.split(' ').map(a => a.length > 1 ? a.substring(1) + a.substring(0,1) + "ay" : a ).join(" "); 
}
