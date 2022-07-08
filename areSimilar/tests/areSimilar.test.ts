import {
    areSimilar
} from "../areSimilar";


test("areSimilar: the length of the input array must be greater than 3.",
    () => {
        expect( 
            () => {
                let arr1: number[] = [];
                let arr2: number[] = [];

                areSimilar(arr1, arr2);
            }
        )

        expect( 
            () => {
                let arr1: number[] = [1];
                let arr2: number[] = [1];

                areSimilar(arr1, arr2);
            }
        )

        expect( 
            () => {
                let arr1: number[] = [1, 2];
                let arr2: number[] = [2, 1];

                areSimilar(arr1, arr2);
            }
        )
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
        )

        expect( 
            () => {
                let arr1: number[] = [1001, 1, 2, 3];
                let arr2: number[] = [1001, 1, 2, 3];

                areSimilar(arr1, arr2);
            }
        )

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

        console.log(result);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1, 2, 2] ane arr2=[2, 1, 1], false is returned",
    () => {
        let arr1 = [1, 2, 2];
        let arr2 = [2, 1, 1];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);

        console.log(result);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1, 2] ane arr2=[1, 2, 3], false is returned",
    () => {
        let arr1 = [1, 2];
        let arr2 = [1, 2, 2];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);

        console.log(result);
        
        expect(result).toBe(expected_result)
    }
)


test("areSimilar: when arr1=[1000, 2, 3, 4, 5] ane arr2=[1000, 2, 3, 4, 6], false is returned",
    () => {
        let arr1 = [1000, 2, 3, 4, 5];
        let arr2 = [1000, 2, 3, 4, 6];
        let expected_result = false;
        let result = areSimilar(arr1, arr2);

        console.log(result);
        
        expect(result).toBe(expected_result)
    }
)