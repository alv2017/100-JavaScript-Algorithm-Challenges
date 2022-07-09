import {
    areSimilar
} from "../areSimilar";

test("areSimilar: the length of the input arrays must be greater than 2.",
    () => {
        let arr01: number[] = [];
        expect(arr01.length === 0);
        let arr02: number[] = [];
        expect(arr02.length === 0);


        expect( 
            () => {
                areSimilar(arr01, arr02);
            }
        ).toThrow()


        let arr11: number[] = [1];
        expect(arr01.length === 1);
        let arr12: number[] = [1];
        expect(arr02.length === 1);

        expect( 
            () => {
                  areSimilar(arr11, arr12);
            }
        )

        
        let arr21: number[] = [1, 2];
        expect(arr21.length === 2);
        let arr22: number[] = [1, 2];
        expect(arr02.length === 2);

        expect( 
            () => {
                areSimilar(arr21, arr22);
            }
        ).toThrow()
    }
)


test("areSimilar: the values of the input arrays must be in [1, 1000]",
    () => {
        expect( 
            () => {
                let arr1: number[] = [0, 1, 2, 3];
                let arr2: number[] = [0, 1, 2, 3];

                areSimilar(arr1, arr2);
            }
        ).toThrow()

        expect( 
            () => {
                let arr1: number[] = [1001, 1, 2, 3];
                let arr2: number[] = [1001, 1, 2, 3];

                areSimilar(arr1, arr2);
            }
        ).toThrow()

    }
)


test("areSimilar: when arr1 and arr2 are equal, true is returned",
    () => {
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];
        let expected_result = true;
        let result = areSimilar(arr1, arr2);
        
        expect(result).toBe(expected_result);

        arr1 = [2, 10, 24, 39, 15, 100];
        arr2 = [2, 10, 24, 39, 15, 100];
        result = areSimilar(arr1, arr2);

        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1, 2, 3] ane arr2=[2, 1, 3], true is returned",
    () => {
        let arr1 = [1, 2, 3];
        let arr2 = [2, 1, 3];
        let expected_result = true;
        let result = areSimilar(arr1, arr2);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1, 2, 2] ane arr2=[2, 1, 1], false is returned",
    () => {
        let arr1 = [1, 2, 2];
        let arr2 = [2, 1, 1];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1, 2] ane arr2=[1, 2, 3], false is returned",
    () => {
        let arr1 = [1, 2];
        let arr2 = [1, 2, 2];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1000, 2, 3, 4, 5] ane arr2=[1000, 2, 3, 4, 6], false is returned",
    () => {
        let arr1 = [1000, 2, 3, 4, 5];
        let arr2 = [1000, 2, 3, 4, 6];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);
        
        expect(result).toBe(expected_result)
    }
)