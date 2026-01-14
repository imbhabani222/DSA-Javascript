// if n = 4;

// need to print by double for loop 

// where row represent i and col reperesent j


// * * * *
// * * * *
// * * * *
// * * * *


const pattern1 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            star = star + "* ";

        }
        star = star + "\n"
    }
    return star;
}
const n = 4;
const output = pattern1(n)
console.log(output)
