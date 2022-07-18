function reduceArray(arr:number[], iteration_number:number): number[] {
    // Constraint: the number of array elements must be 2^k where k is an integer
    if (arr.length % 2) {
        throw new Error(`Array length must be 2^k`)
    }

    let reduced_array:number[] = [];

    for (let i=0; i<arr.length; i=i+2) {
        if (iteration_number % 2) {
            reduced_array[Math.floor(i/2)] = arr[i] + arr[i+1];
        } else {
            reduced_array[Math.floor(i/2)] = arr[i] * arr[i+1];
        }
        
    }

    return reduced_array;
}


export function arrayConversion(arr:number[]): number {
    let arr_length = arr.length;

    // Constraint: input array must be non-empty
    if (arr.length === 0) {
        throw new Error("The input array must be non-empty.");
    }

    // Constraint: max array lenght is 20
    if (arr.length > 20) {
        throw new Error(`The max. size of the input array is 20. (${arr.length})`)
    }

    // Constratin: input array element values must within [-9, 99] interval.
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < -9 || arr[i] > 99 ) {
            throw new Error(`Value error at index ${i} (${arr[i]}): input array values must be within [-9, 99].`);
        }
    }

    // Array length is equal to 1
    if (arr.length == 1) {
        return arr[0];
    }

    // Array length is greater than 1
    let cnt = 1;
    try {
        let reduced_array: number[] = reduceArray(arr, cnt);
        arr = reduced_array;
    } catch (e) {
        if (e.message == "Array length must be 2^k") {
            throw new Error(`Array length error (${arr_length}): the length of the array must be 2^k, where k is an integer.`)
        }
    }
    
    while (arr.length > 1) {
        cnt += 1;
        try {
            let reduced_array: number[] = reduceArray(arr, cnt);
            arr = reduced_array;
        } catch (e) {
            if (e.message == "Array length must be 2^k") {
                throw new Error(`Array length error (${arr_length}): the length of the array must be 2^k, where k is an integer.`)
            }
        }

    }

    return arr[0];
}
