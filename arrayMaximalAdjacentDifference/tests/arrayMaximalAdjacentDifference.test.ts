import {
    arrayMaximalAdjacentDifference
} from "../arrayMaximalAdjacentDifference";


test("arrayMaximalAdjacentDifference: the length of array must be greater or equal to 3",
    () => {
        let arr0: number[] = [];
        try {
            arrayMaximalAdjacentDifference(arr0);
        } catch(e) {
            let expected_error_message = `Array length error (${arr0.length}): Input array length must be greater than or equal to 3`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr1: number[] = [1];
        try {
            arrayMaximalAdjacentDifference(arr1);
        } catch(e) {
            let expected_error_message = `Array length error (${arr1.length}): Input array length must be greater than or equal to 3`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr2: number[] = [1, 2];
        try {
            arrayMaximalAdjacentDifference(arr2);
        } catch(e) {
            let expected_error_message = `Array length error (${arr2.length}): Input array length must be greater than or equal to 3`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr3: number[] = [1, 2, 3];
        expect(arrayMaximalAdjacentDifference(arr3)).toBe(1);
    }
)


test("arrayMaximalAdjacentDifference: the values of the input array must be in [-15, 15]",
    () => {
        let arr1 = [2, 4, 16, 0];
        let idx1 = 2
        try {
            arrayMaximalAdjacentDifference(arr1);
        } catch(e) {
            let expected_error_message = `Value error (${arr1[idx1]} at index {${idx1}}): Input array values must be in [-15, 15] interval`;
            expect(e.message).toBe(expected_error_message);
        }

        let arr2 = [-16, 4, 16, 0];
        let idx2 = 0
        try {
            arrayMaximalAdjacentDifference(arr2);
        } catch(e) {
            let expected_error_message = `Value error (${arr2[idx2]} at index {${idx2}}): Input array values must be in [-15, 15] interval`;
            expect(e.message).toBe(expected_error_message);
        }


        let arr3 = [2, 4, 1, 100, 120];
        let idx3 = 3
        try {
            arrayMaximalAdjacentDifference(arr3);
        } catch(e) {
            let expected_error_message = `Value error (${arr3[idx3]} at index {${idx3}}): Input array values must be in [-15, 15] interval`;
            expect(e.message).toBe(expected_error_message);
        }
    }
)


test("arrayMaximalAdjacentDifference: when input array is [2, 4, 1, 0] the output is 3",
    () => {
        let arr = [2, 4, 1, 0];
        expect(arrayMaximalAdjacentDifference(arr)).toBe(3);
    }
)

test("arrayMaximalAdjacentDifference: when input array is [2, 4, 1, 15] the output is 14",
    () => {
        let arr = [2, 4, 1, 15];
        expect(arrayMaximalAdjacentDifference(arr)).toBe(14);
    }
)


test("arrayMaximalAdjacentDifference: when input array is [2, 4, 15, -15] the output is 30",
    () => {
        let arr = [2, 4, 15, -15];
        expect(arrayMaximalAdjacentDifference(arr)).toBe(30);
    }
)

test("arrayMaximalAdjacentDifference: when input array is [-2, 14, 15] the output is 16",
    () => {
        let arr = [-2, 14, 15];
        expect(arrayMaximalAdjacentDifference(arr)).toBe(16);
    }
)


test("arrayMaximalAdjacentDifference: when input array is [2, 9, 1, 0] the output is 8",
    () => {
        let arr = [2, 9, 1, 0];
        expect(arrayMaximalAdjacentDifference(arr)).toBe(8);
    }
)