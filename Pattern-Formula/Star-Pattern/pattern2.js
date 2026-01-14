// if n = 4;

// need to print by double for loop 

// where row represent i and col reperesent j


// * 
// * * 
// * * * 
// * * * *


const pattern2 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i+1; j++) {
            star = star + "* ";

        }
        star = star + "\n"
    }
    return star;
}
const n = 14;
const output = pattern2(n)
console.log(output)
