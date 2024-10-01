import promptSync from "prompt-sync";
import { editTask } from "./editTask";
import { displayTasks } from "./displayTask";
import {filterTasksBySearchTerm} from "./filterTasksBySearchTerm";
import { findTaskIndexByTitle } from "./findTaskIndexByTitle";
import { displayFilteredTasks } from "./displayFilteredTasks";
import { promptForTaskSelection } from "./promptForTaskSelection";


export function searchTask(tasks: string[][]): string[][] {
    const prompt = promptSync();
    const searchTerm: string = prompt("Ingrese un término para buscar en los títulos: ");
    const filteredTasks: string[][] = filterTasksBySearchTerm(tasks, searchTerm);

    if (filteredTasks.length === 0) {
        console.log("No se encontraron tareas que coincidan con la búsqueda.");
        return tasks;
    }

    displayFilteredTasks(filteredTasks);
    console.log("\n¿Deseas ver el detalle de alguna tarea?");
    console.log("Introduce el número para ver la tarea o '0' para salir");

    const selectedIndex = promptForTaskSelection(filteredTasks);
    if (selectedIndex === -1) {
        return tasks;
    }

    displayTasks([filteredTasks[selectedIndex]]);

    const editConfirm: string = prompt("¿Deseas editar esta tarea? (s/n): ").toLowerCase();
    if (editConfirm === 's') {
        const originalIndex = findTaskIndexByTitle(tasks, filteredTasks[selectedIndex][0]);
        if (originalIndex !== -1) {
            tasks[originalIndex] = editTask(tasks[originalIndex]);
        }
    }

    return tasks;
}