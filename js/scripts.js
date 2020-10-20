//Loops


/*
const string = "Hello everyone, my name is David, and I am from Alaska. Under what circumstances does the moon orbit the earth?"
const array = string.split(" ");
const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
let newArray = [];

array.forEach(function(word){
	if (word.slice(0,1) === "A"){
    pigged = word.concat("way");
    newArray.push(pigged);
  } else {
  newArray.push(word);
  }
});

*/





//Regular Expression

//Taking a break from this. Not working yet. Below is the closest I got. It successfully identifies words that start with vowels...not sure how to cause that to append something to the end...

//pigString = vowelString.replace(/\b[aeiou]/gi, "XXX");


//This doesn't work either, but feels maybe closer? After I get this first bit working I could add additional () statements, and p2, p3 actions.

//Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 


//function piggify(p1){
//  return [p1].concat('way');
//}

//newString = 'Always horrible you know, everyone is out to get ultimate power!'.replace(/(\b[aeiou])/gi, piggify);