import { viewTasks } from './viewTasks';
import { searchTask } from './searchTask';
import { addTask } from './addTask';

let tasks: string[][] = [];

export function handleMenuOption(option: string) {
    switch (option) {
        case "1":
            tasks = viewTasks(tasks);
            break;
        case "2":
            tasks = searchTask(tasks);
            break;
        case "3":
            const newTask = addTask(tasks);
            if (newTask) {
                tasks.push(newTask);
            }
            break;
        case "0":
            console.log("Saliendo, saludos 👋...");
            break;
        default:
            console.error("Por favor, ingresa un número válido.");
    }
}