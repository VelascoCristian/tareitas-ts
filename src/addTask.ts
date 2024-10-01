import promptSync from "prompt-sync";
import { isTitleDuplicate } from './isTitleDuplicate';
import { getValidDueDate } from './getValidDueDate';
import { getDifficulty } from './getDifficulty';

const prompt = promptSync();
const STATE_PENDING = '1';

// Función para agregar una tarea
export function addTask(tasks: string[][]): string[] {
    console.log("Agregar una nueva tarea:");
    let title: string;
    let isDuplicate: boolean = false;

    do {
        title = prompt("Título (obligatorio): ").trim();
        if (title === "") {
            console.log("El título no puede estar vacío. Intenta nuevamente.");
            continue;
        }
        isDuplicate = isTitleDuplicate(tasks, title);
        if (isDuplicate) {
            console.log("El título ya existe. Por favor, elige otro título.");
        }
    } while (title === "" || isDuplicate);

    const description: string = prompt("Descripción (opcional): ") || "Sin descripción";

    const createdAt: string = new Date().toLocaleString();
    const dueDate: string = getValidDueDate(createdAt);

    const difficulty: string = getDifficulty(prompt);

    const newTask: any = [title, description, STATE_PENDING, createdAt, dueDate, difficulty, ""];

    console.log("Tarea agregada exitosamente.");
    return newTask;
}
