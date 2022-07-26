
export function arrayMaximalAdjacentDifference(arr:number[]):number {
    // Constraint: input array length must be greater or equal to 3
    if (arr.length < 3) {
        throw new Error(`Array length error (${arr.length}): Input array length must be greater than or equal to 3`);
    } else if (arr.length > 10) {
        throw new Error(`Array length error (${arr.length}): Input array length must be less than or equal to 10`)
    }
    
    let max_diff = 0;
    for (let i=0; i<arr.length-1; i++) {
        // Constraint: input array element value must be in [-15, 15]
        if (arr[i] < -15 || arr[i] > 15) {
            throw new Error(`Value error (${arr[i]} at index {${i}}): Input array values must be in [-15, 15] interval`)
        }
        let diff = Math.abs(arr[i+1] - arr[i]);
        if (max_diff < diff) {
            max_diff = diff;
        }
    }
    return max_diff;
}