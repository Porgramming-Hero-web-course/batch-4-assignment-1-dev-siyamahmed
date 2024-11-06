// problem number 1 :

// start 

function sumArray(num: number[]): number {
    return num.reduce((accumulator, num) => accumulator + num, 0)
}
const sumArrayResult = sumArray([1, 2, 3, 4, 5,])
console.log(sumArrayResult);

//  end 

