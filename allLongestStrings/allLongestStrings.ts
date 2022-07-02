export function allLongestStrings(arr: string[]): string[] {
    // Constraint: array is non-empty
    if (arr.length < 1) {
        throw new Error("The input array should be non-empty.");
    }

    // Constraint: the number of array elements is less or equal to 10
    if (arr.length > 10) {
        throw new Error("The length of the input array shouldn't be greater than 10.")
    }

    // Constraint: the max length of array element is less than or equal to 10
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length < 1 || arr[i].length > 10) {
            throw new Error("The string shouldn't be empty, and its length shouldn't exceed 10.")
        } 
    }

    let max_len: number = 0;
    let dict: { 
        [key:number]: string []
    } = {};

    for (let i=0; i < arr.length; i++) {
        let item_length = arr[i].length;
        if (dict.hasOwnProperty(item_length)) {
            dict[item_length].push(arr[i]);
        }
        else {
            dict[item_length] = [arr[i]];
        }

        if (item_length > max_len) {
            max_len = item_length;
        }
    }

    return dict[max_len];
}