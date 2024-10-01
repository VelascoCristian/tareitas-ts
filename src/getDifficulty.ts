const DIFFICULTY_EASY = '1';
const DIFFICULTY_MEDIUM = '2';
const DIFFICULTY_HARD = '3';

export function getDifficulty(prompt: any): string {
    let difficulty: string;
    do {
        difficulty = prompt("Dificultad (1 = Fácil, 2 = Medio, 3 = Difícil), por defecto facil: ").trim();
        if (difficulty === "") {
            difficulty = "1";
        }
    } while (difficulty !== "1" && difficulty !== "2" && difficulty !== "3");

    switch (difficulty) {
        case "1":
            return DIFFICULTY_EASY;
        case "2":
            return DIFFICULTY_MEDIUM;
        case "3":
            return DIFFICULTY_HARD;
        default:
            return DIFFICULTY_EASY;
    }
}
