
export function add(...numbers: number[]): number {
    // Constraints
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] < -100 || numbers[i] > 1000) {
            throw new Error("Constraint violation: the number should be greater than -100 and less than 1000.");
        }
    
    } 

    return numbers.reduce((total, n) => total + n, 0);
}

