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

//The puncCap function moves end-of-word punctuation where it belongs after all letter shuffling is complete, and checks to see if the word was capitalized, then re-capitalizes the new first letter.

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
  return reorder.join("");
}

//The pigLatin function breaks the input down into individual words, sorts them according to whether they start with a vowel or a consonant, translates them to pig latin, then puts the input back together to return it.

function pigLatin(input) {
  const array = input.split(" ");
  let pigArray = [];
  array.forEach(function(word){
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
    const input = $("input#toBePigged").val();
    $("#piggyIntro").hide();
    $("#piggyResult").show();
    $("#piggyWords").append(pigLatin(input));
  });
});
  



