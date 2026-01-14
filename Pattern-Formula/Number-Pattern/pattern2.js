// if n = 5;

// need to print by double for loop 

// where row represent i and col reperesent j


// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4
// 5 5 5 5 5


const pattern2 = (num) => {
    let star = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            star = star + (i+1) + " ";

        }
        star = star + "\n"
    }
    return star;
}
const n = 5;
const output = pattern2(n)
console.log(output)
