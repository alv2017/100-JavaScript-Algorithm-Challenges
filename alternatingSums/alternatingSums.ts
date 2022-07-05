
export function alternatingSums(arr: number[]):number[] {
    // Constraint: the input array must be non-empty
    if (arr.length < 1) {
        throw new Error("The input array must be non-empty.");
    }

    // Constraint: the length of the input array must be less than or equal to 10
    if (arr.length > 10) {
        throw new Error("The lenght of the input array must not exceed 10.");
    }

    // Constraint: the smallest element of the input array must be less than or equal to 45
    // Constraint: the largest element of the input array must not exceed 100
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 45 || arr[i] > 100) {
            throw new Error("The elements of the input array must be in [45, 100] range.")
        }
    }

    let s1 = 0;
    let s2 = 0;

    for (let i=0; i<arr.length; i++) {
        if (i%2 == 0) {
            s1 += arr[i];
        } else {
            s2 += arr[i];
        }
    }

    return [s1, s2]
}