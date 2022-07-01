import {
    addTwoDigits
} from "../addTwoDigits";


test("addTwoDigits: throws error when the input number is less than 10",
    () => {
        expect(() => {
            addTwoDigits(9);
          }).toThrow();

          expect(() => {
            addTwoDigits(0);
          }).toThrow();

          expect(() => {
            addTwoDigits(-10);
          }).toThrow();
    }
)

test("addTwoDigits: throws error when the input number is greater than 99",
    () => {
        expect(() => {
            addTwoDigits(100);
          }).toThrow();

          expect(() => {
            addTwoDigits(101);
          }).toThrow();

          expect(() => {
            addTwoDigits(-200);
          }).toThrow();
    }
)


test("addTwoDigits: returns the sum of two digits of the number",
    () => {
        let result1 = addTwoDigits(10);
        expect(result1).toBe(1);
        
        let result2 = addTwoDigits(99);
        expect(result2).toBe(18);

        let result3 = addTwoDigits(53);
        expect(result3).toBe(8);
    }
)