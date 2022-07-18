import {
    arrayConversion
} from "../arrayConversion";


test("arrayConversion: input array must be non-empty",
    () => {
        let arr: number[] = [];
        expect(arr.length === 0);

        try {
            arrayConversion(arr);
        } catch(e) {
            let expected_error_message = "The input array must be non-empty.";
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayConversion: input array max. length should not exceed 20.",
    () => {
        let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        expect(arr.length > 20).toBeTruthy();

        try {
            arrayConversion(arr);
        } catch(e) {
            let expected_error_message = `The max. size of the input array is 20. (${arr.length})`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayConversion: the value of array elements should be greater or equla to -9",
    () => {
        let arr: number[] = [-9, -10, -15, 5];
        let idx = 1;

        expect(arr[1] < -9).toBeTruthy();

        try {
            arrayConversion(arr);
        } catch(e) {
            let expected_error_message = `Value error at index ${idx} (${arr[idx]}): input array values must be within [-9, 99].`
            expect(e.message).toBe(expected_error_message);
        }
    }
)


test("arrayConversion: the value of array elements should be less or equla to 99",
    () => {
        let arr: number[] = [99, 100, 1, 5];
        let idx = 1;

        expect(arr[1] > 99).toBeTruthy();

        try {
            arrayConversion(arr);
        } catch(e) {
            let expected_error_message = `Value error at index ${idx} (${arr[idx]}): input array values must be within [-9, 99].`
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayConversion: the length of the reducable array should be 2^k, where k is an integer.",
    () => {
        let arr1 = [1, 2, 3];
        try {
            arrayConversion(arr1);
        } catch(e) {
            let expected_error_message = `Array length error (${arr1.length}): the length of the array must be 2^k, where k is an integer.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr2 = [1, 2, 3, 4, 5, 6];
        try {
            arrayConversion(arr2);
        } catch(e) {
            let expected_error_message = `Array length error (${arr2.length}): the length of the array must be 2^k, where k is an integer.`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayConversion: when input is [12] the output is 12.",
    () => {
        let arr = [12];
        let expected_result = 12;
        let result = arrayConversion(arr);

        console.log(result);
 
        expect(result).toBe(expected_result);
    }
)

test("arrayConversion: when input is [10, 12, 30, 14] the output is 968.",
    () => {
        let arr = [10, 12, 30, 14];
        let expected_result = 968;
        let result = arrayConversion(arr);

        console.log(result);
 
        expect(result).toBe(expected_result);
    }
)

test("arrayConversion: when input is [1, 2, 3, 4, 5, 6, 7, 8] the output is 186.",
    () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        let expected_result = 186;
        let result = arrayConversion(arr);

        console.log(result);
 
        expect(result).toBe(expected_result);
    }
)