import {
    almostIncreasingSequence
} from "../almostIncreasingSequence";


test("almostIncreasingSequence: the size of the input array must be greater than 1.",
    () => {
        expect(() => {
            let arr: number[] = [];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
        expect(() => {
            let arr: number[] = [1];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
    }
)

test("almostIncreasingSequence: the size of the input array must not be greater than 106.",
    () => {
        expect(() => {
            let arr: number[] = [];
            for (let i=0; i<106; i++) {
                arr.push(i);
            }
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
        expect(() => {
            let arr: number[] = [];
            for (let i=0; i<200; i++) {
                arr.push(i);
            }
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
    }
)

test("almostIncreasingSequence: the value of any element of the input array must be greater than -106.",
    () => {
        expect(() => {
            let arr: number[] = [1, 2, -106];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
        expect(() => {
            let arr: number[] = [-152, 1, 2, 3, 4, 5];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
    }
)

test("almostIncreasingSequence: the value of any element of the input array must be less than 106.",
    () => {
        expect(() => {
            let arr: number[] = [1, 2, 106];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
        expect(() => {
            let arr: number[] = [254, 1, 2, 3, 4, 5];
            almostIncreasingSequence(arr);
        }).toThrow(); 
        
    }
)

test("almostIncreasingSequence: if input array [1, 3, 2, 1] the expected return value is false",
    () => {
        let arr = [1, 3, 2, 1];
        let expected_result = false;
        let actual_result = almostIncreasingSequence(arr);

        expect(actual_result).toBe(expected_result);
        
    }
)


test("almostIncreasingSequence: if input array [1, 3, 2] the expected return value is true",
    () => {
        let arr = [1, 3, 2];
        let expected_result = true;
        let actual_result = almostIncreasingSequence(arr);

        expect(actual_result).toBe(expected_result);
        
    }
)


