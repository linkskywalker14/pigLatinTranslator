//INDEX
//Pig Latin without Regular Expressions
//1.Global Variables
//2.Consonant Function
//3.PuncCap Function
//4.PigLatin Function
//5.UI Logic

//1.Global Variables

const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const sometimes = ["A", "E", "I", "O", "U","Y", "a", "e", "i", "o", "u","y"];
const symbols = [".", ",", "!", "?", ":", ";", "\""]
let quote = false;

//2.Consonant Function
//Takes words that begin with a consonant, moves the first syllables to the end, and adds "ay."

function consonant(word){
  let reorder = word.split("");
  if (sometimes.includes(reorder[0])){
    let x = reorder.shift();
    reorder.push(x);
  }
  for (i = 0; i < reorder.length; i+=1) {
    if (sometimes.includes(reorder[0])) {
      reorder.push("ay");
      break;
    } else if (reorder[0].toLowerCase() === "q" && reorder[1].toLowerCase() === "u") {
      reorder.push(reorder[0], reorder[1]);
      reorder.shift();
      reorder.shift();
    } else {
      let x = reorder.shift();
      reorder.push(x);
    }
  }
  return reorder.join("");
}

//3.PuncCap Function
//Moves end-of-word punctuation where it belongs after all letter shuffling is complete, and checks to see if the word was capitalized, then re-capitalizes the new first letter.

function puncCap(word){
  let reorder = word.split("");
  const x = reorder.length;
  for (i = 0; i < x; i+=1) {
    if (symbols.includes(reorder[i])){
      reorder.push(reorder[i]);
      delete reorder[i];
    } else if (reorder[i] === reorder[i].toUpperCase() && reorder[i] !== "\'"){
      reorder[i] = reorder[i].toLowerCase();
      reorder[0] = reorder[0].toUpperCase();
    } 
  }
  if (quote === true){
    reorder.unshift("\"");
    quote = false;
  }
  return reorder.join("");
}

//4.PigLatin Function
//Breaks the input down into individual words, checks first to see if they're the start of a quotation, then sorts between words that begin with vowels and words that begin with consonants
//words are then translated, reassembled into a single string, and returned. 

function pigLatin(input) {
  const array = input.split(" ");
  let pigArray = [];
  array.forEach(function(word){
    if (word.slice(0,1) === "\"") {
      quote = true;
      word = word.substring(1);
    }
  	if (vowel.includes(word.slice(0,1))){
      word = word.concat("way");
      pigArray.push(puncCap(word));
    } else {
      word = consonant(word);
      pigArray.push(puncCap(word));
    }
  });
  return pigArray.join(" ");
}

//5.UI Logic

$(document).ready(function() {
  $("form#run").submit(function(event) {
    event.preventDefault();
    const input = $("input#toBePigged").val();
    $("#piggyIntro").hide();
    $("#piggyResult").show();
    $("#piggyWords").append(pigLatin(input));
  });
});