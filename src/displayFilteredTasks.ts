import {getStateText} from "./getStateText";

export function displayFilteredTasks(filteredTasks: string[][]): void {
    console.log("\nResultados de búsqueda:");
    for (let i = 0; i < filteredTasks.length; i++) {
        const stateText = getStateText(filteredTasks[i][2]);
        console.log(`${i + 1}. ${filteredTasks[i][0]} - Estado: ${stateText}`);
    }
}