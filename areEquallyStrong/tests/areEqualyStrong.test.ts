import {
    ArmRestler, areEqualyStrong
} from "../areEqualyStrong";

test("ArmRestler: hand strength must be greater than 0",
    () => {
        expect(() => {
            new ArmRestler(-10, 10);
        }).toThrow();

        expect(() => {
            new ArmRestler(-10, -10);
        }).toThrow();

        expect(() => {
            new ArmRestler(0, -10);
        }).toThrow();
    }
)

test("ArmRestler: hand strength must not be greater than 20.",
    () => {
        expect(() => {
            new ArmRestler(21, 10);
        }).toThrow();

        expect(() => {
            new ArmRestler(10, 21);
        }).toThrow();

        expect(() => {
            new ArmRestler(21, 21);
        }).toThrow();
    }
)

test("ArmRestler: creating a new arm restler instance",
    () => {
        let arm_restler1 = new ArmRestler(0, 0);
        expect(arm_restler1.stronger_hand).toBe(0);
        expect(arm_restler1.weaker_hand).toBe(0);

        let arm_restler2 = new ArmRestler(20, 20);
        expect(arm_restler2.stronger_hand).toBe(20);
        expect(arm_restler2.weaker_hand).toBe(20);

        let arm_restler3 = new ArmRestler(19, 14);
        expect(arm_restler3.stronger_hand).toBe(19);
        expect(arm_restler3.weaker_hand).toBe(14);
    }
)

test("areEqualyStrong: person_one(rh=15, lh=10), person_two(rh=10, lh=15). Expected: true",
    () => {
        let person_one = new ArmRestler(15, 10);
        let person_two = new ArmRestler(10, 15);

        let result: boolean = areEqualyStrong(person_one, person_two);
        let expected_result = true;

        expect(result).toBe(expected_result);
    }
)

test("areEqualyStrong: person_one(rh=15, lh=10), person_two(rh=15, lh=10). Expected: true",
    () => {
        let person_one = new ArmRestler(10, 15);
        let person_two = new ArmRestler(10, 15);

        let result: boolean = areEqualyStrong(person_one, person_two);
        let expected_result = true;

        expect(result).toBe(expected_result);
    }
)

test("areEqualyStrong: person_one(rh=10, lh=15), person_two(rh=9, lh=15). Expected: false",
    () => {
        let person_one = new ArmRestler(10, 15);
        let person_two = new ArmRestler(9, 15);

        let result: boolean = areEqualyStrong(person_one, person_two);
        let expected_result = false;

        expect(result).toBe(expected_result);
    }
)

test("areEqualyStrong: person_one(rh=15, lh=10), person_two(rh=15, lh=9). Expected: false",
    () => {
        let person_one = new ArmRestler(15, 10);
        let person_two = new ArmRestler(15, 9);

        let result: boolean = areEqualyStrong(person_one, person_two);
        let expected_result = false;

        expect(result).toBe(expected_result);
    }
)
