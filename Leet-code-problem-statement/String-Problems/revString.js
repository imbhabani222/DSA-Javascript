//Reverse letter in a String

// Given an input string s, reverse the order of the letters.

// Example 1:

// Input: s = "blue"
// Output: "eulb"

// Example 2:

// Input: s = "  hello   "
// Output: "olleh"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "he ll o"
// Output: "olleh"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.


// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?


const revStr = (str) => {
    let revS = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != " ") {
            revS = revS + str[i];
        }
    }
    return revS;
}
const string = "  hel  lo  "
const res = revStr(string);
console.log(res)