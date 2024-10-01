import promptSync from "prompt-sync";
import { displayTasks } from "./displayTask";

const STATE_PENDING = '1';
const STATE_ON_GOING = '2';
const STATE_FINISHED = '3';

export function editTask(task: string[]): string[] {
    const prompt = promptSync();
    console.log("\nEditando tarea:");
    console.log(`Título actual: ${task[0]}`);
    let newTitle: string = prompt("Nuevo título (dejar en blanco para mantener el actual): ") || "";
    if (newTitle !== "") {
        task[0] = newTitle;
    }

    console.log(`Descripción actual: ${task[1]}`);
    let newDescription: string = prompt("Nueva descripción (dejar en blanco para mantener la actual): ") || "";
    if (newDescription !== "") {
        task[1] = newDescription;
    }

    console.log(`Estado actual: ${task[2]}`);
    let newState: string;
    do {
        newState = prompt(`Nuevo estado (${STATE_PENDING}."Pendiente", ${STATE_ON_GOING}. "En proceso", ${STATE_FINISHED}. "Terminada", ingrese 1, 2, 3 o deja en blanco para mantener el actual): `) || "";
        if (newState !== "" && newState !== STATE_PENDING && newState !== STATE_ON_GOING && newState !== STATE_FINISHED) {
            console.log("Estado inválido. Por favor, intente nuevamente.");
        }
    } while (newState !== "" && newState !== STATE_PENDING && newState !== STATE_ON_GOING && newState !== STATE_FINISHED);
    if (newState !== "") {
        task[2] = newState;
    }

    console.log(`Fecha de vencimiento actual: ${task[4]}`);
    let newDueDate: string = prompt("Nueva fecha de vencimiento (formato YYYY-MM-DD, 'Sin vencimiento', o dejar en blanco para mantener la actual): ") || "";
    if (newDueDate !== "") {
        task[4] = newDueDate;
    }

    console.log(`Dificultad actual: ${task[5]}`);
    let newDifficulty: string;
    do {
        newDifficulty = prompt("Nueva dificultad (1. Facil, 2. Medio, 3. Dificil, ingrese 1, 2, 3 o deja en blanco para mantener la actual): ") || "";
        if (newDifficulty !== "" && newDifficulty !== "1" && newDifficulty !== "2" && newDifficulty !== "3") {
            console.log("Dificultad inválida. Por favor, intente nuevamente.");
        }
    } while (newDifficulty !== "" && newDifficulty !== "1" && newDifficulty !== "2" && newDifficulty !== "3");
    if (newDifficulty !== "") {
        task[5] = newDifficulty;
    }

    task[6] = new Date().toISOString().split('T')[0];
    console.clear();
    console.log("Tarea actualizada con éxito.");

    displayTasks([task]);

    return task;
}