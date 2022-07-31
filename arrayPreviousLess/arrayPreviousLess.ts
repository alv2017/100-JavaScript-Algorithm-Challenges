export function arrayPreviousLess(arr:number[]):number[] {
    // Constraint: the length of the input array must be greater than 2 and less than 16
    if (arr.length < 3) {
        throw new Error(`Array length error (${arr.length}): Input array length must be greater than 2.`)
    } else if (arr.length > 15) {
        throw new Error(`Array length error (${arr.length}): Input array length must be less than 16.`)
    }

    let new_arr: number[] = [-1];
    if (arr[0] < 1 || arr[0] > 200) {
        throw new Error(`Value error (${arr[0]} at index ${0}):The value of input array elements must be in [1, 200]`)
    }

    for (let i=1; i<arr.length; i++) {
        if (arr[i] < 1 || arr[i] > 200) {
            throw new Error(`Value error (${arr[i]} at index ${i}):The value of input array elements must be in [1, 200]`)
        }
        for (let j=i-1; j>-1; j--) {
            if (arr[i] > arr[j]) {
                new_arr.push(arr[j])
                break
            }
        }
        if (i == new_arr.length) {
            new_arr.push(-1)
        }

    }

    return new_arr;
}