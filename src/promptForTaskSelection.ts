import promptSync from "prompt-sync";

export function promptForTaskSelection(filteredTasks: string[][]): number {
    const prompt = promptSync();
    let option: string;
    let selectedIndex: number = -1;
    do {
        option = prompt("Ingrese el número de la tarea o 0 para salir: ");
        selectedIndex = parseInt(option) - 1;
        if (option !== "0" && (selectedIndex < 0 || selectedIndex >= filteredTasks.length)) {
            console.log("Opción inválida. Por favor, ingrese un número válido o 0 para salir.");
        }
    } while (option !== "0" && (selectedIndex < 0 || selectedIndex >= filteredTasks.length));
    return selectedIndex;
}