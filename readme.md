## Gaius Porkus Linguistic Therapy

A translator which takes plain text English, and translates it into pig latin, using the following rules:

- For words beginning with a vowel, add "way" to the end.
- For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
- If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
- For words beginning with "y", treat "y" as a consonant.

### Method

There are two methods here, meant to exercise two sets of skills. 

The non-RegEx code breaks the input string down into an array of individual words. The words are then broken down into arrays of individual characters, which are tested and rearranged to conform to the rules given above. Words are then reassambled and pushed one-by-one into a new array, which is joined into a string, and displayed to the user.

The RegEx code similarly breaks down the input string into an array of individual words, but is able to perform identical replacements without breaking the words down to indidivual characters. 

### Challenges

The purpose of this project is to put what I've learned recently into practice. 

- I attempted to begin the project with the RegEx version of the page, but was so thoroughly stymied by the inscrutability of regular expressions that I gave up to write the non-RegEx version first. Even when that was done and I returned to the RegEx it took nearly a full day of struggle before I began to grasp what RegEx could (and could _not_) do. To be completely honest I'm still not sure why some of the things I tried didn't work, and why other things did, but I have achieved a circumspect competence with RegEx through this project. 
- I wanted the website to be able to handle most normal English inputs gracefully, and produce a pleasant output. That meant not only removing punctuation and capitalization from the middle of words, but also placing them correctly at the beginning or the end of a word. Of particular note are quotation marks, which might need to be at the beginning, the end, or on both sides of a given word. I am not completely pleased with using a global variable to do this, but it seemed the least intrusive option.

### Legal

Copyright (c) 2020 Nick LS Whelan. Only those who can answer my riddles three may use this code.