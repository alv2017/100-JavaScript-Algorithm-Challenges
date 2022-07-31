import {
    arrayPreviousLess
} from "../arrayPreviousLess";


test("arrayPreviousLess: throws exception if input array length is greater than 2",
    () => {
        let arr0: number[] = [];
        try {
            arrayPreviousLess(arr0)
        } catch(e) {
            let expected_error_message = `Array length error (${arr0.length}): Input array length must be greater than 2.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr1: number[] = [1];
        try {
            arrayPreviousLess(arr1)
        } catch(e) {
            let expected_error_message = `Array length error (${arr1.length}): Input array length must be greater than 2.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr2: number[] = [1, 2];
        try {
            arrayPreviousLess(arr2)
        } catch(e) {
            let expected_error_message = `Array length error (${arr2.length}): Input array length must be greater than 2.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr3: number[] = [1, 2, 3];
        expect(arrayPreviousLess(arr3).length).toBe(3);
    } 
)


test("arrayPreviousLess: throws exception if input array length is less than 16",
    () => {
        let arr15: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        expect(arrayPreviousLess(arr15).length).toBe(15);


        let arr16: number[] = [...arr15];
        arr16.push(16);
        expect(arr16.length).toBe(16);

        try {
            arrayPreviousLess(arr16)
        } catch(e) {
            let expected_error_message = `Array length error (${arr16.length}): Input array length must be less than 16.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr17: number[] = [...arr16];
        arr17.push(17);
        expect(arr17.length).toBe(17)

        try {
            arrayPreviousLess(arr17)
        } catch(e) {
            let expected_error_message = `Array length error (${arr17.length}): Input array length must be less than 16.`;
            expect(e.message).toBe(expected_error_message);
        }

    } 
)


test("arrayPreviousLess: the elements of the input array must be within [1, 200]",
    () => {
        let arr1 = [0, 1, 2];
        let idx1 = 0;

        try {
            arrayPreviousLess(arr1);
        } catch(e) {
            let expected_error_message = `Value error (${arr1[idx1]} at index ${idx1}):The value of input array elements must be in [1, 200]`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr2 = [201, 1, 2];
        let idx2 = 0;

        try {
            arrayPreviousLess(arr2);
        } catch(e) {
            let expected_error_message = `Value error (${arr2[idx2]} at index ${idx2}):The value of input array elements must be in [1, 200]`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr3 = [1, 200, 0];
        let idx3 = 2;

        try {
            arrayPreviousLess(arr3);
        } catch(e) {
            let expected_error_message = `Value error (${arr3[idx3]} at index ${idx3}):The value of input array elements must be in [1, 200]`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr4 = [1, 2, 200, 201];
        let idx4 = 3;

        try {
            arrayPreviousLess(arr4);
        } catch(e) {
            let expected_error_message = `Value error (${arr4[idx4]} at index ${idx4}):The value of input array elements must be in [1, 200]`;
            expect(e.message).toBe(expected_error_message);
        }

    }
)


test("arrayPreviousLess: when input array is [3, 5, 2, 4, 5] the output is [-1, 3, -1, 2, 4]",
    () => {
        let arr = [3, 5, 2, 4, 5];
        let result = arrayPreviousLess(arr);
        let expected_result = [-1, 3, -1, 2, 4];

        expect(result).toEqual(expected_result);
    }
)


test("arrayPreviousLess: when input array is [7, 1, 10, 5, 25, 3] the output is [-1, -1, 1, 1, 5, 1]",
    () => {
        let arr = [7, 1, 10, 5, 25, 3];
        let result = arrayPreviousLess(arr);
        let expected_result = [-1, -1, 1, 1, 5, 1];

        expect(result).toEqual(expected_result);
    }
)