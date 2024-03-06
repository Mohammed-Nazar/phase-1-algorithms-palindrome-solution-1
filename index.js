function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  if the word is the same as the word in reverse return true,

  if the input the same as the word in reverse
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  I take the input then convert it as array of letters and reverse it then return it to string,
  if the word is the same as the word in reverse return true else return false,
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
