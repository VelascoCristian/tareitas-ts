export function findTaskIndex(tasks: string[][], taskTitle: string): number {
    for (let i: number = 0; i < tasks.length; i++) {
        if (tasks[i][0] === taskTitle) {
            return i;
        }
    }
    return -1;
}