export function sortAlphabetically(tasks: string[][]): void {
    for (let i: number = 0; i < tasks.length - 1; i++) {
        for (let j: number = 0; j < tasks.length - i - 1; j++) {
            if (tasks[j][0].toLowerCase() > tasks[j + 1][0].toLowerCase()) {
                let temp: string[] = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }
}