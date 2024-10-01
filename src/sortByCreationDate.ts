export function sortByCreationDate(tasks: string[][]): void {
    for (let i: number = 0; i < tasks.length - 1; i++) {
        for (let j: number = 0; j < tasks.length - i - 1; j++) {
            let date1: Date = new Date(tasks[j][3]);
            let date2: Date = new Date(tasks[j + 1][3]);
            if (date1 > date2) {
                let temp: string[] = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }
}