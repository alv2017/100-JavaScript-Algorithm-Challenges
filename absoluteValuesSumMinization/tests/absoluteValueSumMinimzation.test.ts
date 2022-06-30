
import {
    getAbsSumMinimizationValue
} from "../absoluteValueSumMinimization";


function getAbsDifferenceSum(arr: number[], idx: number): number
{
    if (idx >= arr.length) {
        throw new Error("Index can not be higher than the length of array.");
    }

    let s: number = 0;
    for (let i=0; i<arr.length; i++) {
        s += Math.abs(arr[i] - arr[idx]);
    }
    return s;
}

function validate_getAbsSumMinimizationValue(arr: number[]): number {
    let idx_min = 0;
    let smin = getAbsDifferenceSum(arr, 0);
    for (let i=1; i<arr.length; i++) {
        let s = getAbsDifferenceSum(arr, i);
        if ( (s<smin) || (s==smin && arr[i]<arr[idx_min]) ) {
            smin = s;
            idx_min = i;
        }
    }

    return arr[idx_min];
}



// getAbsSumMinimizationValue

test("getAbsSumMinimizationValue: minimization value for [2, 4, 7] is 4",
    () => {
        let arr = [2, 4, 7];
        let result = getAbsSumMinimizationValue(arr);
        expect(result).toBe(4);

        let validation_result = validate_getAbsSumMinimizationValue(arr);
        expect(validation_result).toBe(result);
    }
)

test("getAbsSumMinimizationValue: minimization value for [2, 4, 7, 6] is 4",
    () => {
        let arr = [2, 4, 7, 6];
        let result = getAbsSumMinimizationValue(arr);
        expect(result).toBe(4);

        let validation_result = validate_getAbsSumMinimizationValue(arr);
        expect(validation_result).toBe(result);
    }
)

test("getAbsSumMinimizationValue: minimization value for [2, 4, 7, 6, 6] is 6",
    () => {
        let arr = [2, 4, 7, 6, 6];
        let result = getAbsSumMinimizationValue(arr);
        expect(result).toBe(6);

        let validation_result = validate_getAbsSumMinimizationValue(arr);
        expect(validation_result).toBe(result);
    }
)

test("getAbsSumMinimizationValue: minimization value for [2, 4, 7, 6, 6, 8] is 6",
    () => {
        let arr = [2, 4, 7, 6, 6, 8];
        let result = getAbsSumMinimizationValue(arr);
        expect(result).toBe(6);

        let validation_result = validate_getAbsSumMinimizationValue(arr);
        expect(validation_result).toBe(result);
    }
)