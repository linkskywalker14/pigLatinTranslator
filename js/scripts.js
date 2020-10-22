//INDEX
//1.Loop Business Logic
//2.RegEx Business Logic
//3.UI Logic

//1.Loop Business Logic

const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const sometimes = ["A", "E", "I", "O", "U","Y", "a", "e", "i", "o", "u","y"];
const symbols = [".", ",", "!", "?", ":", ";"]

//Takes words that begin with a consonant, moves the first syllable to the end and adds "ay."

function consonant(word){
  reorder = word.split("");
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

//Keeps punctuation at the ends of words, regardless of how letters are shifted.

function punctuation(word){
  reorder = word.split("");
  x = reorder.length;
  for (i = 0; i < x; i+=1) {
    if (symbols.includes(reorder[i])){
      reorder.push(reorder[i]);
      delete reorder[i];
    }
  }
  return reorder.join("");
}

//Core of the thing.

const string = "Hello everyone, my name is David, and I am from Alaska. Under what circumstances does the moon orbit the earth?";
const array = string.split(" ");
let newArray = [];

array.forEach(function(word){
	if (vowel.includes(word.slice(0,1))){
    let pigged = word.concat("way");
    pigged = punctuation(pigged);
    newArray.push(pigged);
  } else {
    let reorder = consonant(word);
    reorder = punctuation(reorder);
    newArray.push(reorder);
  }
});

const final = newArray.join(" ");

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



// User Interface Logic

$(document).ready(function() {
  $("form#run").submit(function(event) {
    event.preventDefault();
    $("#piggyResult").show();
    $("#piggyResult").append(final);
  });
});
  



