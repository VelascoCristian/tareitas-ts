export function isTitleDuplicate(tasks: string[][], title: string): boolean {
    for (let i: number = 0; i < tasks.length; i++) {
        if (tasks[i][0] === title) {
            return true;
        }
    }
    return false;
}