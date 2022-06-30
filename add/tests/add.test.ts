import {
    add
} from "../add";


test("add: throws error when the input number is less than -100",
    () => {
        expect(() => {
            add(-101);
          }).toThrow();

          expect(() => {
            add(-200);
          }).toThrow();

          expect(() => {
            add(-1000);
          }).toThrow();
    }
)


test("add: adds two numbers",
    () => {
        let result1 = add(1, 2);
        expect(result1).toBe(3);

        let result2 = add(3, 4);
        expect(result2).toBe(7);
    }
)


test("add: adds more than two numbers",
    () => {
        let result1 = add(10, 15, 20);
        expect(result1).toBe(45);

        let result2 = add(1, 2, 3, 4);
        expect(result2).toBe(10);
    }
)
