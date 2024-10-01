export function findTaskIndexByTitle(tasks: string[][], title: string): number {
    for (let i: number = 0; i < tasks.length; i++) {
        if (tasks[i][0] === title) {
            return i;
        }
    }
    return -1;
}