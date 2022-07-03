import {
    isAlphabetSubSequence
} from "../alphabetSubSequence";


test("alphabetSubSequence: The length of input string must be greater than or equal to two.",
    () => {
        expect(() => {
            isAlphabetSubSequence("");
        }).toThrow();

        expect(() => {
            isAlphabetSubSequence("a");
        }).toThrow();
    }
)


test("alphabetSubSequence: The length of the input string must not exceed 15.",
    () => {
        expect(() => {
            isAlphabetSubSequence("aaaabbbbccccdddd");
        }).toThrow();

        expect(() => {
            isAlphabetSubSequence("abcdeabcdeabcdeabcde");
        }).toThrow();
    }
)


test("isAlphabetSubSequence: when input is 'effg', returns false",
    () => {
        let s = 'effg';
        let expected_result = false;
        let actual_result = isAlphabetSubSequence(s);

        expect(actual_result).toBe(expected_result);
    }
)


test("isAlphabetSubSequence: when input is 'cdce', returns false",
    () => {
        let s = 'cdce';
        let expected_result = false;
        let actual_result = isAlphabetSubSequence(s);

        expect(actual_result).toBe(expected_result);
    }
)


test("isAlphabetSubSequence: when input is 'cda', returns false",
    () => {
        let s = 'cda';
        let expected_result = false;
        let actual_result = isAlphabetSubSequence(s);

        expect(actual_result).toBe(expected_result);
    }
)


test("isAlphabetSubSequence: when input is 'ace', returns true",
    () => {
        let s = 'ace';
        let expected_result = true;
        let actual_result = isAlphabetSubSequence(s);

        expect(actual_result).toBe(expected_result);
    }
)


test("isAlphabetSubSequence: when input is 'bxz', returns true",
    () => {
        let s = 'bxz';
        let expected_result = true;
        let actual_result = isAlphabetSubSequence(s);

        expect(actual_result).toBe(expected_result);
    }
)