// prompt the user for a word
var fullWord = prompt('Enter a single word you\'d like to convert to Pig Latin');
 
// check to make sure the word is a string
if (isNaN(fullWord)) {
    // create our vowels array
    var vowels = ['a', 'e', 'i', 'o', 'u'];
 
    // get the first letter of the word
    var firstLetter = fullWord.toLowerCase().substring(0, 1);
 
    // get the rest of the word
    var restOfWord = fullWord.toLowerCase().substring(1);
 
    // this looks for the first letter of the word in the vowels array
    // if it IS in the array, it returns the array index
    // so if the first letter is "i", this line returns 2
    // if it is NOT in the array, this line returns -1
    var firstIndex = vowels.indexOf(firstLetter);
    
    // create the right new word based on whether or not the
    // first letter of the original word is in the vowels array
    if (firstIndex >= 0) {
        var newWord = fullWord + ' is ' + fullWord + 'way' + ' in Pig Latin.';
    } else {
        var newWord = fullWord + ' is ' + restOfWord + firstLetter + 'ay' + ' in Pig Latin.';
    }
    alert(newWord);
}