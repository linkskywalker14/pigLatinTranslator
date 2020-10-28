//INDEX
//Pig Latin using Regular Expressions

//1.Global Variables
//2.Consonant Function
//3.PuncCap Function
//4.PigLatin Function
//5.UI Logic

//1.Global Variables

const symbols = [".", ",", "!", "?", ":", ";", "\""]
let quote = false;

//2.Consonant Function
//Separates a word into two substrings, $1 and $2, then reorders them as $2 + $1 + "ay"
//$1 starts at the beginning of the word, and selects either all characters up to a qu |or| all characters before the first A,E,I,O, or U.
//$2 starts at the first A, E, I, O, U, or Y, and continues on to the end of the word.

function consonant(word) {
  return word.replace(/\b(.*(?<=q)u|[^aeiou]+)([aeiouy].*)$/i, "$2$1ay");
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
  	if (word.match(/\b[aeiou]/i)){
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