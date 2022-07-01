
export function adjacentElementProduct(arr:number[]):number {
    // Constraint: array length is between 2 and 10
    if (arr.length < 2 || arr.length > 10) {
        throw new Error("The size of array must be between 2 and 10.");
    }


    // Constraint: any array element is in [-1000, 1000]
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < -1000 || arr[i] > 1000) {
            throw new Error("The value of element must be in [-1000, 1000] interval.");
        }
    }

    let max_prod = arr[0] * arr[1];

    for (let i=1; i<arr.length-1; i++) {
        if (arr[i] * arr[i+1] > max_prod) {
            max_prod = arr[i] * arr[i+1];
        }
    }
    

    return max_prod;
}