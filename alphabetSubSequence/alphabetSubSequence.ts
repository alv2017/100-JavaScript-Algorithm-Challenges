type Dict = {
    [key: string]: number;
}

let english_alphabet: Dict = {
    a: 1, 
    b: 2, 
    c: 3,
    d: 4,
    e: 5,
    f: 6, 
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};


export function isAlphabetSubSequence(s: string, alphabet: Dict = english_alphabet): boolean {
    // Constraint the input string length must be greater than or equal to 2
    if (s.length < 2) {
        throw new Error("The length of the string must be greater than or equal to 2.")
    }

    // Constraint the size of the input string shouldn't exceed 15
    if (s.length > 15) {
        throw new Error("The length of the string must not exceed 15.")
    }

    for (let i=1; i<s.length; i++) {
        if (alphabet[s[i]] <= alphabet[s[i-1]]) {
            return false;
        }    
    }
    return true;
}
