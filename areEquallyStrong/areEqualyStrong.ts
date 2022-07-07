
export class ArmRestler {
    public stronger_hand: number;
    public weaker_hand: number;

    constructor(
        private rhStrength: number,
        private lhStrength: number
    ) {
        // Constraint: hand strength must be greater than 0.
        if (rhStrength < 0 || lhStrength < 0) {
            throw new Error("Hand strength must be greater than 0.");
        }

        // Constraint: hand strength must not be greater than 20.
        if (rhStrength > 20 || lhStrength > 20) {
            throw new Error("Hand strength must not be greater than 20.");
        }

        this.stronger_hand = Math.max(rhStrength, lhStrength);
        this.weaker_hand = Math.min(rhStrength, lhStrength);
    }
}


export function areEqualyStrong(person_one: ArmRestler, person_two: ArmRestler): boolean {
    if (person_one.stronger_hand == person_two.stronger_hand && person_one.weaker_hand == person_two.weaker_hand) {
        return true;
    } else {
        return false;
    }
}