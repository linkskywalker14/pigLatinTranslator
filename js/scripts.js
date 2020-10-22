//INDEX
//1.Loop Business Logic
//2.RegEx Business Logic
//3.UI Logic

//1.Loop Business Logic

const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const sometimes = ["A", "E", "I", "O", "U","Y", "a", "e", "i", "o", "u","y"];
const symbols = [".", ",", "!", "?", ":", ";"]

//The consonant function takes words that begin with a consonant, moves the first syllables to the end and adds "ay."

function consonant(word){
  let reorder = word.split("");
  for (i = 0; i < reorder.length; i+=1) {
    if (sometimes.includes(reorder[0])){
      reorder.push("ay");
      break;
    } else {
      const x = reorder.shift();
      reorder.push(x);
    }
  }
  return reorder.join("");
}

//The punctuation function moves end-of-word punctuation back to the end after all letter shuffling is complete.

function punctuation(word){
  let reorder = word.split("");
  const x = reorder.length;
  for (i = 0; i < x; i+=1) {
    if (symbols.includes(reorder[i])){
      reorder.push(reorder[i]);
      delete reorder[i];
    }
  }
  return reorder.join("");
}

//The capitalization function checks to see if a word was capitalized, and re-capitalizes the new first letter.

function capitalization(word){
  let reorder = word.split("");
  for (i = 0; i < reorder.length; i+=1) {
    if (reorder[i] === reorder[i].toUpperCase() && reorder[i].toUpperCase() !== reorder[i].toLowerCase()){
      reorder[i] = reorder[i].toLowerCase();
      reorder[0] = reorder[0].toUpperCase();
    }
  }
  return reorder.join("");
}

//

function check(word){
  word = punctuation(word);
  word = capitalization(word);
  pigged.push(word);
}

//Core of the thing.

const input = "Hello everyone, my name is David, and I am from Alaska. QUESTION: Under what circumstances does the moon orbit the earth?";
const array = input.split(" ");
let pigged = [];

array.forEach(function(word){
	if (vowel.includes(word.slice(0,1))){
    let pigged = word.concat("way");
    check(pigged);
  } else {
    let pigged = consonant(word);
    check(pigged);
  }
});

const final = pigged.join(" ");

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



//3.UI Logic

$(document).ready(function() {
  $("form#run").submit(function(event) {
    event.preventDefault();
    $("#piggyResult").show();
    $("#piggyResult").append(final);
  });
});
  



