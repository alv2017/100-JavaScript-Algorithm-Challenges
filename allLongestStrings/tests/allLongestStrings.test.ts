import {
    allLongestStrings
} from "../allLongestStrings";


// Constraint: input array is not empty
test("allLongestStrings: input array can not be empty.",
    () => {
        expect(() => {
            let arr: string[] = [];
            allLongestStrings(arr);
        }).toThrow();       
    }
)


// Constraint: input array length must not be greater than 10
test("allLongestStrings: the length of the input array can not be greater than 10.",
    () => {
        expect(() => {
            let arr: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            allLongestStrings(arr);
        }).toThrow();       
    }
)


// Constraints: all strings in the array should be non-empty
test("allLongestStrings: all strings in the array should be non-empty",
    () => {
        expect(() => {
            let arr: string[] = ["", "abc", "c02"];
            allLongestStrings(arr);
        }).toThrow();       
    }
)


// Constraint: the length of any string in the array shouldn't be greater than 10
test("allLongestStrings: the length of any string in the input array can not exceed 10.",
    () => {
        expect(() => {
            let arr: string[] = ["123456789abcdef", "abc", "rtdf"];
            allLongestStrings(arr);
        }).toThrow();       
    }
)


test("allLongestStrings: for input ['aba', 'aa', 'ad', 'vcd', 'aba'], the output should be ['aba', 'vcd', 'aba']",
    () => {
        let arr = ["aba", "aa", "ad", "vcd", "aba"];
        let expected_output = ["aba", "vcd", "aba"];
        let output = allLongestStrings(arr);

        expect(output.length).toBe(3);

        expect(output).toEqual(expect.arrayContaining(expected_output));
    }
)

test("allLongestStrings: for input ['alpha', 'beta', 'gama', 'delta'], the output should be ['alpha', 'delta]",
    () => {
        let arr = ["alpha", "beta", "gama", "delta"];
        let expected_output = ["alpha", "delta"];
        let output = allLongestStrings(arr);

        expect(output.length).toBe(2);

        expect(output).toEqual(expect.arrayContaining(expected_output));
    }
)



