export function sortByDueDate(tasks: string[][]): void {
    for (let i: number = 0; i < tasks.length - 1; i++) {
        for (let j: number = 0; j < tasks.length - i - 1; j++) {
            let date1: Date = tasks[j][4] === "Sin vencimiento" ? new Date(8640000000000000) : new Date(tasks[j][4]);
            let date2: Date = tasks[j + 1][4] === "Sin vencimiento" ? new Date(8640000000000000) : new Date(tasks[j + 1][4]);
            if (date1 > date2) {
                let temp: string[] = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }
}