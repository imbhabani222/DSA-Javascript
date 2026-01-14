// if n = 5;

// need to print by double for loop 

// where row represent i and col reperesent j


// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4


const pattern1 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            star = star + (j + 1) + " ";

        }
        star = star + "\n"
    }
    return star;
}
const n = 4;
const output = pattern1(n)
console.log(output)
