
export function areSimilar(arr1:number[], arr2:number[]): boolean {

    if (arr1.length != arr2.length) {
        return false;
    }

    // Constraint: the length of input arrays must be greater than 2
    if (arr1.length < 3) {
        throw new Error("The lenght of the input arrays must be greater than 2.")
    }

    // Constraint: the values of the input arrays must be in [1, 1000]
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] < 1 || arr2[i] < 1) {
            throw new Error("The values of the input arrays must be greater than or equal to 1.")
        }

        if (arr1[i] > 1000 || arr2[i] > 1000) {
            throw new Error("The values of the input arrays must be less than or equal to 1000.")
        }
    }

    let count_distinct = 0;
    let distinct_at_idx: number[] = [];

    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            count_distinct += 1;
            distinct_at_idx.push(i);
        }

        if (count_distinct > 2) {
            return false;
        }
    }

    if (count_distinct == 0) {
        return true
    } else if (count_distinct == 1) {
        return false
    } else {
        let id1 = distinct_at_idx[0];
        let id2 = distinct_at_idx[1];

        if (arr1[id1]===arr2[id2] && arr1[id2]===arr2[id1]) {
            return true;
        } else {
            return false;
        }
    }
}