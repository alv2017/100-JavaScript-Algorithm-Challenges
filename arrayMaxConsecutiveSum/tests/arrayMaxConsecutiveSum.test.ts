import {
    arrayMaxConsecutiveSum
} from "../arrayMaxConsecutiveSum";



test("arrayMaxConsecutiveSum: the lenght of the input array must be greater than 2",
    () => {
        let arr1: number[] = [];
        expect(arr1.length === 0);

        try {
            arrayMaxConsecutiveSum(arr1);
        } catch(e) {
            let expected_error_message = `Array length error (${arr1.length}): The length of the input array must be greater than or equal to 3.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr2: number[] = [1];
        expect(arr2.length === 1);

        try {
            arrayMaxConsecutiveSum(arr2);
        } catch(e) {
            let expected_error_message = `Array length error (${arr2.length}): The length of the input array must be greater than or equal to 3.`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr3: number[] = [1, 2];
        expect(arr3.length === 0);

        try {
            arrayMaxConsecutiveSum(arr3);
        } catch(e) {
            let expected_error_message = `Array length error (${arr3.length}): The length of the input array must be greater than or equal to 3.`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr4: number[] = [1, 2, 3];
        expect(arr4.length === 3);
        expect(arrayMaxConsecutiveSum(arr4)).toBe(5);
    }
)


test("arrayMaxConsecutiveSum: the lenght of the input array must less than or equal to 105.",
    () => {
        let arr105: number[] = [];
        for (let i=1; i<=105; i++) {
            arr105.push(i);
        }
        expect(arr105.length === 105);
        expect(arrayMaxConsecutiveSum(arr105)).toBe(209);

        let arr106: number[] = [...arr105]
        arr106.push(106);
        expect(arr106.length === 106);

        try {
            arrayMaxConsecutiveSum(arr106);
        } catch(e) {
            let expected_error_message = `Array length error (${arr106.length}): The length of the input array must be less than or equal to 105.`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)


test("arrayMaxConsecutiveSum: when input array is [0, 1, 2, 3], the error is the value error is thrown",
    () => {
        let arr: number[] = [0, 1, 2, 3];
        let error_idx = 0; 

        try {
            arrayMaxConsecutiveSum(arr)
        } catch(e) {
            let expected_error_message = `Value Error (${arr[error_idx]} at index ${error_idx}): The values of the input array must be within [1, 1000] interval.`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayMaxConsecutiveSum: when input array is [1, 2, 3, 0], the error is the value error is thrown",
    () => {
        let arr: number[] = [1, 2, 3, 0];
        let error_idx = 3; 

        try {
            arrayMaxConsecutiveSum(arr)
        } catch(e) {
            let expected_error_message = `Value Error (${arr[error_idx]} at index ${error_idx}): The values of the input array must be within [1, 1000] interval.`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)

test("arrayMaxConsecutiveSum: when input array is [1000, 1001, 2, 3], the error is the value error is thrown",
    () => {
        let arr: number[] = [1000, 1001, 2, 3];
        let error_idx = 1; 

        try {
            arrayMaxConsecutiveSum(arr)
        } catch(e) {
            let expected_error_message = `Value Error (${arr[error_idx]} at index ${error_idx}): The values of the input array must be within [1, 1000] interval.`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)


test("arrayMaxConsecutiveSum: when input array is [2, 3, 5, 1, 6] the output is 8",
    () => {
        let arr: number[] = [2, 3, 5, 1, 6];
        expect(arrayMaxConsecutiveSum(arr)).toBe(8);
    }
)


test("arrayMaxConsecutiveSum: when input array is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] the output is 19",
    () => {
        let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(arrayMaxConsecutiveSum(arr)).toBe(19);
    }
)