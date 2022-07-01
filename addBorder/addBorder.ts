
export function addBorder(arr:string[]) {
    // Constraint: the length of array is less or equal to 5

    if (arr.length < 1) {
        throw new Error("Constraint violation: The array should be non-empty.");
    }

    if (arr.length > 5) {
        throw new Error("Constraint violation: The length of the array can not be greater than 5.");
    }

    // Constraint: the length of the first strings is greater than 1
    if (arr[0].length < 1) {
        throw new Error("Constraint violation: The string shouldn't be empty.");
    }

    // Constraint: the length of the first string is less than 5
    if (arr[0].length > 5) {
        throw new Error("Constraint violation: The length of string can't be greater than 5.");
    }

    // Constraint: the lengths of array strings are equal
    let length_of_string = arr[0].length;

    for (let i=1; i<arr.length; i++) {
        if (arr[i].length != arr[0].length) {
            throw Error("Constraint violation: All the strings in the array have to be of the same size.")
        }
    }

    let array_length = arr.length;
    let str_length = arr[0].length;

    let arr_with_border: string[] = [];
    let s_first = "*".repeat(str_length + 2);
    arr_with_border.push(s_first);

    for (let i=0; i<arr.length; i++) {
        let updated_string = "*" + arr[i] + "*";
        arr_with_border.push(updated_string);
    }

    let s_last = "*".repeat(str_length + 2);
    arr_with_border.push(s_last);

    return arr_with_border;
}

