// if n = 5;

// need to print by double for loop 

// where row represent i and col reperesent j


// * * * * *
// * * * *
// * * *
// * *
// *


const pattern3 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num-i; j++) {
            star = star + "* ";

        }
        star = star + "\n"
    }
    return star;
}
const n = 5;
const output = pattern3(n)
console.log(output)
