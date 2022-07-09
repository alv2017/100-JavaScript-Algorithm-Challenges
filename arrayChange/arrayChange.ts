export function arrayChange(arr: number[]): number {
    // Constraint: input array length must be greater than 2
    if (arr.length < 3) {
        throw new Error("Invalid array length: The length of the input array must be greater than 2.");
    }

    // Constraint: input array length must be less than 106
    if (arr.length > 105) {
        throw new Error("Invalid array length: The length of the input array must be less than 106.");
    }

    // Constraint: any input array element must be in [-105, 105].
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < -105 || arr[i] > 105) {
            throw new Error("Element value is out of range: All input array elements must be in [-105, 105]")
        }
    }

    let steps = 0
    for (let i=0; i<arr.length; i++){
        let d1 = arr[i] - arr[i-1];
        if (d1<=0) {
            arr[i] = arr[i] - d1 + 1;
            steps += -d1 + 1
        } 
    }

    return steps;
}