
export function arrayMaxConsecutiveSum(arr: number[]): number { 
    // Constraint: input array length must be greater than or equal to 3
    if (arr.length < 3) {
        throw new Error(`Array length error (${arr.length}): The length of the input array must be greater than or equal to 3.`)
    }

    // Constraint: input array length must be less than or equal to 105
    if (arr.length > 105) {
        throw new Error(`Array length error (${arr.length}): The length of the input array must be less than or equal to 105.`)
    }

    let max_sum = 0;
    for (let i=0; i<=arr.length - 1; i++) {
        // Constraint: the value of the input array must be in [1, 1000] interval.
        if (arr[i] < 1 || arr[i] > 1000) {
            throw new Error(`Value Error (${arr[i]} at index ${i}): The values of the input array must be within [1, 1000] interval.`)
        } 
        else if (arr[i+1] < 1 || arr[i+1] > 1000) {
            throw new Error(`Value Error (${arr[i+1]} at index ${i+1}): The values of the input array must be within [1, 1000] interval.`)
        }

        let sum = arr[i] + arr[i+1];
        if (sum > max_sum) {
            max_sum = sum;
        }
        //console.log(sum, max_sum);
    }

    return max_sum;
}