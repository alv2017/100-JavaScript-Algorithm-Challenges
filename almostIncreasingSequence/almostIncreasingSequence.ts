export function almostIncreasingSequence(arr: number[]): boolean {
    // Constraint: the input array length is greater than 1
    if (arr.length < 2) {
        throw new Error("The size of the input array must be greater than 1.");
    }

    // Constraint: the input array length is less than 106
    if (arr.length > 105) {
        throw new Error("The size of the input array must not exceed 105.");
    }

    // Constraint: all the elements of the input array must be greater than -106 and less than 
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < -105 || arr[i] > 105) {
            throw new Error("The element of the input array must be greater than -106 and less than 106.")
        }
    }

    let cnt = 0;
    for (let i=1; i<arr.length; i++) {
        let dt = arr[i] - arr[i-1];

        if (dt < 0) cnt += 1;
        
        if (cnt > 1) {
            return false;
        }
    }

    return true;
}