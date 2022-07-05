import {
    alternatingSums
} from "../alternatingSums";


test("alternatingSum: The input array must be non-empty.",
    () => {
        expect(() => {
            alternatingSums([]);
        }).toThrow();
    }
)

test("alternatingSum: The length of the input array must not exceed 10.",
    () => {
        let arr1 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61];
        expect(arr1.length).toBe(11);

        expect(() => {
            alternatingSums(arr1);
        }).toThrow();

        let arr2 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];
        expect(arr2.length).toBe(15);

        expect(() => {
            alternatingSums(arr2);
        }).toThrow();
    }
)

test("alternatingSum: The smallest element of the input array should not be less than 45.",
    () => {
        let arr = [51, 52];
        let result = alternatingSums(arr);
        expect(result.length==2);

        expect(() => {
            alternatingSums([51, 52, 44]);
        }).toThrow();

        expect(() => {
            alternatingSums([51, 52, 40]);
        }).toThrow();

        expect(() => {
            alternatingSums([51, 52, 20]);
        }).toThrow();
    }
)

test("alternatingSums: when input array is [50, 60, 60, 45, 70], the output is [180, 105]", 
    () => {
        let arr = [50, 60, 60, 45, 70];
        let expected_result = [180, 105];
        let actual_result = alternatingSums(arr);

        expect(actual_result.length).toBe(2);
        expect(actual_result).toEqual(expect.arrayContaining(expected_result));
    }
)