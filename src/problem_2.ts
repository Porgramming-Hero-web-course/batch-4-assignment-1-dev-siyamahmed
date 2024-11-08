// problem number 2 :

function removeDuplicates(num: number[]): number[] {
    return Array.from(new Set(num))
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(result);
