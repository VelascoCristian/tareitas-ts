export function filteredTasks(tasks: string[][], filterCondition: string): string[][] {
    let filtered: string[][] = [];
    for (let i: number = 0; i < tasks.length; i++) {
        if (tasks[i][2] === filterCondition) {
            filtered.push(tasks[i]);
        }
    }
    return filtered;
}