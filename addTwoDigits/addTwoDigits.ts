

export function addTwoDigits(num: number): number {
    // Constraints

    if (!Number.isInteger(num)) {
        throw new Error("Constraint violation: The number should be an integer.");
    }

    if (num < 10 || num > 99) {
        throw new Error("Constraint violation: The number should be an integer between 10 and 99.");
    }


    let d1 = Math.floor(num / 10);
    let d2 = num % 10;

    return d1 + d2;
}