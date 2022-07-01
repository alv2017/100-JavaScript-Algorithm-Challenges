import {
    adjacentElementProduct
} from "../adjacentElementProduct";


test("addjacentElementProduct: throws error when the input array size is less than 2",
    () => {
        expect(() => {
            adjacentElementProduct([1]);
          }).toThrow();

    }
)


test("addjacentElementProduct: throws error when the input array size is less greater than 10",
    () => {
        expect(() => {
            adjacentElementProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
          }).toThrow();

    }
)


test("adjacentElementProduct: throws error when one of the elements is less than -1000",
    () => {
        expect(() => {
          adjacentElementProduct([1, 2, -1001])
        }).toThrow();

        expect(() => {
          adjacentElementProduct([1, 2, -2000])
        }).toThrow();
    }
)


test("adjacentElementProduct: throws error when one of the elements is greater than 1000",
    () => {
        expect(() => {
          adjacentElementProduct([1, 2, 1001])
        }).toThrow();

        expect(() => {
          adjacentElementProduct([1, 2, 2000])
        }).toThrow();
    }
)


test("addjacentElementProduct: for [3, 6, -2, -5, 7, 3] is 21",
    () => {
        let arr = [3, 6, -2, -5, 7, 3];
        let result = adjacentElementProduct(arr);

        expect(result).toBe(21);
    }

)


test("addjacentElementProduct: for [-1000, 1000] is -1000000",
    () => {
        let arr = [-1000, 1000];
        let result = adjacentElementProduct(arr);

        expect(result).toBe(-1000000);
    }

)