//INDEX
//Pig Latin using Regular Expressions

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
  for (i = 0; i < reorder.length; i+=1) {
    if (sometimes.includes(reorder[0])) {
      reorder.push("ay");
      break;
    } else if (reorder[0].toLowerCase() === "q" && reorder[1].toLowerCase() === "u") {
      reorder.shift();
      reorder.shift();
      reorder.push("qu");
    } else {
      const x = reorder.shift();
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
    } else if (reorder[i] === reorder[i].toUpperCase()){
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
      let pigged = word.concat("way");
      pigArray.push(puncCap(pigged));
    } else {
      let pigged = consonant(word);
      pigArray.push(puncCap(pigged));
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


/*
//2.RegEx Business Logic

//Taking a break from this. Not working yet. Below is the closest I got. It successfully identifies words that start with vowels...not sure how to cause that to append something to the end...

pigString = vowelString.replace(/\b[aeiou]/gi, "XXX");


//This doesn't work either, but feels maybe closer? After I get this first bit working I could add additional () statements, and p2, p3 actions.

//Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 


function piggify(p1){
  return [p1].concat('way');
}

newString = 'Always horrible you know, everyone is out to get ultimate power!'.replace(/(\b[aeiou])/gi, piggify);

*/