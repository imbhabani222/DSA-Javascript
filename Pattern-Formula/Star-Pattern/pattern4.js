// if n = 5;

// need to print by triple for loop 

// where row represent i and col reperesent j


//       *
//     * *
//   * * *
// * * * *
//* * * * *


const pattern4 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < n-(i+1); j++) {
            star = star + ". ";

        }
        for(let k=0;k<i+1;k++){
             star = star + "* ";
        }
        star = star + "\n"
    }
    return star;
}
const n = 5;
const output = pattern4(n)
console.log(output)
