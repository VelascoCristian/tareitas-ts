import { filteredTasks } from "./filteredTasks";
import { editTask } from "./editTask";
import promptSync from "prompt-sync";
import { findTaskIndex } from "./findTaskIndex";
import { sortTasks } from "./sortTasks";
import { displayTasks } from "./displayTask";

const prompt = promptSync();
const STATE_PENDING = 'Pendiente';
const STATE_ON_GOING = 'En progreso';
const STATE_FINISHED = 'Terminada';

export function viewTasks(tasks: string[][]): string[][] {
    let option: string;
    let modifiedTasks: string[][] = tasks.slice();

    do {
        console.log("\n--------------");
        console.log("Ver Tareas");
        console.log("1. Todas");
        console.log("2. Pendientes");
        console.log("3. En progreso");
        console.log("4. Terminadas");
        console.log("0. Salir");
        option = prompt("Seleccione una opción: ") || "";

        let currentFilteredTasks: string[][] = [];
        let filterCondition: string = "";

        switch (option) {
            case "1":
                currentFilteredTasks = modifiedTasks.slice();
                break;
            case "2":
                filterCondition = STATE_PENDING;
                break;
            case "3":
                filterCondition = STATE_ON_GOING;
                break;
            case "4":
                filterCondition = STATE_FINISHED;
                break;
            case "0":
                console.log("Volviendo al menú principal...");
                return modifiedTasks;
            default:
                console.log("Opción inválida. Por favor, seleccione un número del 0 al 4.");
                continue;
        }

        if (filterCondition !== "") {
            currentFilteredTasks = filteredTasks(modifiedTasks, filterCondition);
        }

        if (currentFilteredTasks.length === 0) {
            console.log("No hay tareas disponibles en esta categoría.");
        } else {
            sortTasks(currentFilteredTasks);

            displayTasks(currentFilteredTasks);

            let taskOption: string;
            do {
                taskOption = prompt("Seleccione el número de la tarea para editar (0 para volver): ") || "0";
                let selectedIndex: number = parseInt(taskOption) - 1;

                if (taskOption === "0") {
                    break;
                }

                if (selectedIndex >= 0 && selectedIndex < currentFilteredTasks.length) {
                    let editConfirm: string = prompt("¿Deseas editar esta tarea? (s/n): ").toLowerCase();
                    if (editConfirm === 's') {
                        let originalIndex: number = findTaskIndex(modifiedTasks, currentFilteredTasks[selectedIndex][0]);
                        if (originalIndex !== -1) {
                            let editedTask = editTask(modifiedTasks[originalIndex]);
                            modifiedTasks[originalIndex] = editedTask;

                            if (filterCondition !== "") {
                                currentFilteredTasks = filteredTasks(modifiedTasks, filterCondition);
                            } else {
                                currentFilteredTasks = modifiedTasks.slice();
                            }

                            sortTasks(currentFilteredTasks);
                            displayTasks(currentFilteredTasks);
                        }
                    }
                } else {
                    console.log("Número de tarea inválido. Por favor, intente nuevamente.");
                }
            } while (taskOption !== "0");
        }
    } while (option !== "0");

    return modifiedTasks;
}