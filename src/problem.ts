// problem number 1 :

// start 

function sumArray(num: number[]): number {
    return num.reduce((accumulator, num) => accumulator + num, 0)
}
const sumArrayResult = sumArray([1, 2, 3, 4, 5,])
// console.log(sumArrayResult);

//  end 

// ------------->

// problem number 2 :

function removeDuplicates(num: number[]): number[] {
    return Array.from(new Set(num))
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(result);
