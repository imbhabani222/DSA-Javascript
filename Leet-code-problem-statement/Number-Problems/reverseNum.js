// LeetCode no. 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1

const reverse = (x) => {
    let xCopy = x;
    let limit = Math.pow(2, 31);
    if (x < 0) x = Math.abs(x);
    let rev = 0
    while (x > 0) {
        let rem = x % 10
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    if (rev > limit) return 0
    return xCopy < 0 ? -rev : rev;

};
const number = 123
const revNum = reverse(number);
console.log(revNum)