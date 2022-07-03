import {
    alphabeticShift
} from "../alphabeticShift";


test("The input string must be non-empty.",
    () => {
        expect(() => {
            alphabeticShift("");
        }).toThrow();

        expect(() => {
            alphabeticShift("     ");
        }).toThrow();
    }
)


test("The length of the input string must not exceed 10",
    () => {
        expect(() => {
            alphabeticShift("aaabbbcccdd");
        }).toThrow();

        expect(() => {
            alphabeticShift("aaaabbbbccccdddd");
        }).toThrow();
    }
)


test("alphabeticShift: when input is 'crazy' the expected return value is 'dsbaz'",
    () => {
        let s = "crazy";
        let expected_output = "dsbaz";
        let actual_output = alphabeticShift("crazy");

        expect(actual_output).toBe(expected_output);
    }
)


test("alphabeticalShift: numbers and spaces are not shifted",
    () => {
        let s1 = "abc123";
        let expected_output1 = "bcd123";
        let actual_output1 = alphabeticShift(s1);
        
        expect(actual_output1).toBe(expected_output1);


        let s2 = " abc 123 ";
        let expected_output2 = " bcd 123 ";
        let actual_output2 = alphabeticShift(s2);
        
        expect(actual_output2).toBe(expected_output2);
    }
)

test("alphabeticalShift: capital letters are converted to lower case and then shifted.",
    () => {
        let s1 = "ABCD";
        let expected_output1 = "bcde";
        let actual_output1 = alphabeticShift(s1);
        
        expect(actual_output1).toBe(expected_output1);


        let s2 = " ABC 123 ";
        let expected_output2 = " bcd 123 ";
        let actual_output2 = alphabeticShift(s2);
        
        expect(actual_output2).toBe(expected_output2);
    }
)