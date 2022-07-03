
let english_alphabet: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

type Cypher = {
    [key: string]: string;
}

function alphabet_cypher(alphabet: string[], shift: number = 0): Cypher {
    let acypher: Cypher = {};
    for (let i=0; i<alphabet.length; i++) {
        acypher[alphabet[i]] = alphabet[(i+shift) % alphabet.length];
    }

    return acypher;
}

export function alphabeticShift(s: string, shift: number = 1): string {
    // Constraint: input string s is non-empty
    s = s.toLowerCase();
    
    if (s.trim().length == 0) {
        throw new Error("The input string must be non-empty.");
    }

    // Constraint: input string s is no longer than 10 
    if (s.length > 10) {
        throw new Error("The input string is too long. The length of the string should not exceed 10.");
    }


    let cypher = alphabet_cypher(english_alphabet, shift);
    let encrypted_word: string = "";

    for (let i=0; i<s.length; i++) {
        encrypted_word += cypher[s[i]] || s[i];
    }

    return encrypted_word
}