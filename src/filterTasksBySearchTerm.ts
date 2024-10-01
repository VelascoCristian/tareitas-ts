import { containsIgnoreCase } from "./containsIgnoreCase";

export function filterTasksBySearchTerm(tasks: string[][], searchTerm: string): string[][] {
    const filteredTasks: string[][] = [];
    for (let i: number = 0; i < tasks.length; i++) {
        if (containsIgnoreCase(tasks[i][0], searchTerm)) {
            filteredTasks.push(tasks[i]);
        }
    }
    return filteredTasks;
}