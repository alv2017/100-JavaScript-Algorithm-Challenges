import {
    arrayChange
} from "../arrayChange";

test("arrayChange: input array length must be greater than two",
    () => {
        let arr0: number[] = [];
        expect(arr0.length === 0);
        expect( 
            () => {
                arrayChange(arr0)
            }
        ).toThrow();

        let arr1: number[] = [1];
        expect(arr1.length === 1);
        expect( 
            () => {
                arrayChange(arr1)
            }
        ).toThrow();

        let arr2: number[] = [1, 1];
        expect(arr2.length === 2);

        expect( 
            () => {
                arrayChange(arr2);
            }
        ).toThrow()
    }
)

test("arrayChange: input array length must be less than 106",
    () => {
        let arr: number[] = [];
        for (let i=0; i<106; i++) {
            arr.push(1);
        }
        expect(arr.length).toBe(106);

        expect(
            () => {
                arrayChange(arr);
            }
        ).toThrow()
    }
)

test("arrayChange: when input is [1, 1, 1] the output is 3.",
    () => {
        let arr = [1, 1, 1];
        let expected_result = 3;
        let result = arrayChange(arr);

        expect(result).toBe(expected_result);
    }
)

test("arrayChange: when input is [1, 1, 2] the output is 2.",
    () => {
        let arr = [1, 1, 2];
        let expected_result = 2;
        let result = arrayChange(arr);

        expect(result).toBe(expected_result);
    }
)

test("arrayChange: when input is [1, 2, 3] the output is 0.",
    () => {
        let arr = [1, 2, 3];
        let expected_result = 0;
        let result = arrayChange(arr);

        expect(result).toBe(expected_result);
    }
)