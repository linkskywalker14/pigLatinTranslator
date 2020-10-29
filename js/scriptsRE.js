//INDEX
//Pig Latin using Regular Expressions
//1.Global Variables
//2.PuncCap Function
//3.PigLatin Function
//4.UI Logic

//1.Global Variables

let quote = false;

//2.PuncCap Function
//Starts by rearranging all words so that any punctuation in them (except an apostrophe or underscore) is moved to the end.
//If the word contains a capital letter, the whole word is made lower case, then the first letter is capitalized.
//Finally, if the quote flag is set to true, a quotation mark is placed at the start of it, then the flag is set to false.

function puncCap(word){
  word = word.replace(/(\w*)([^A-Za-z0-9_'])(\w*)/i, "$1$3$2");
  if (word.match(/[A-Z]/)){
    word = word.toLowerCase();
    word =  word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (quote === true){
    word = "\"" + word;
    quote = false;
  }
  return word;
}

//3.PigLatin Function
//Breaks the input down into individual words. Each word is first checked to see if it is the start of a quotation. If so, the quote flag is set to true, and the mark is removed to make other operations easier.
//Words that start with a vowel have "way" appended to them.
//All other words (those starting with consonants) are separated into two substrings, $1 and $2, then reordered as $2 + $1 + "ay"
//$1 starts at the beginning of the word, and selects either all characters up to a qu |or| all characters before the first A,E,I,O, or U.
//$2 starts at the first A, E, I, O, U, or Y, and continues on to the end of the word.
//All words are then sent to the puncCap function, pushed into the output array, and finally joined back into a single string.

function pigLatin(input) {
  const array = input.split(" ");
  let pigArray = [];
  array.forEach(function(word){
    if (word.charAt(0) === "\"") {
      quote = true;
      word = word.substring(1);
    }
    if (word.match(/\b[aeiou]/i)){
      word = word.replace(/\b([aeiou].*)/i, "$1way");
    } else {
      word = word.replace(/\b(.*(?<=q)u|[^aeiou]+)([aeiouy].*)$/i, "$2$1ay");
    }
    pigArray.push(puncCap(word));
  });
  return pigArray.join(" ");
}

//4.UI Logic

$(document).ready(function() {
  $("form#run").submit(function(event) {
    event.preventDefault();
    const input = $("input#toBePigged").val();
    $("#piggyIntro").hide();
    $("#piggyResult").show();
    $("#piggyWords").append(pigLatin(input));
  });
});