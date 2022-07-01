import {
    addBorder
} from "../addBorder";


test("addBorder: throws error when the input array is empty",
    () => {
        expect(() => {
            let arr: string[] = [];
            addBorder(arr);
          }).toThrow();
    }
)


test("addBorder: throws error when the size of the input array is greater than 5",
    () => {
        expect(() => {
            let arr: string[] = [
                "abc",
                "def",
                "hij",
                "klm",
                "nop",
                "qrs"
            ];
            addBorder(arr);
          }).toThrow();
    }
)


test("addBorder: throws error when the first string is empty",
    () => {
        expect(() => {
            let arr: string[] = ["", "", ""];
            addBorder(arr);
          }).toThrow();
    }
)


test("addBorder: throws error when the lenght of the first string is greater than 5",
    () => {
        expect(() => {
            let arr: string[] = ["abcdef", "123456", "abc123"];
            addBorder(arr);
          }).toThrow();
    }
)


test("addBorder: throws error when all the strings are not of the same length.",
    () => {
        expect(() => {
            let arr: string[] = ["abc", "123456", "ll"];
            addBorder(arr);
          }).toThrow();       
    }
)


test("addBorder: returns array with border",
    () => {
        let arr: string[] = ["abc", "ded"];
        let arr_with_border = addBorder(arr);
        let expected_result = ["*****", "*abc*", "*ded*", "*****"];

        expect(arr_with_border).toEqual(expect.arrayContaining(expected_result));

        expect(expected_result).toEqual(expect.arrayContaining(arr_with_border));
    }
)