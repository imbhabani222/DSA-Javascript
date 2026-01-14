// if n = 6;

// need to print by double for loop 

// where row represent i and col reperesent j


// 1 
// 1 0 
// 1 0 1 
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0


// const pattern4 = (num) => {
//     let star = ""
//     for (let i = 0; i < num; i++) {
//         for (let j = 0; j < i + 1; j++) {

//             if ((j % 2) === 0) {
//                 star = star + "1 ";
//             } else {
//                 star = star + "0 ";
//             }

//         }
//         star = star + "\n"
//     }
//     return star;
// }
// const n = 6;
// const output = pattern4(n)
// console.log(output)


const pattern4 = (num) => {
    let star = "";
    for (let i = 0; i < num; i++) {
        let temp = 1;
        for (let j = 0; j < i + 1; j++) {
            star = star + temp;
            if (temp === 1) {
                temp = 0;
            } else {
                temp = 1;
            }

        }
        star = star + "\n"
    }
    return star;
}
const n = 6;
const output = pattern4(n)
console.log(output)
