export function displayTasks(tasks: string[][]): void {
    console.log("\nTareas encontradas:");
    for (let i: number = 0; i < tasks.length; i++) {
        console.log(`------- Tarea ${i + 1} -------`);
        console.log(`Título: ${tasks[i][0]}`);
        console.log(`Descripción: ${tasks[i][1]}`);
        console.log(`Estado: ${tasks[i][5] === "1" ? "Pendiente" : tasks[i][5] === "2" ? "En proceso" : "Terminada"}`);
        console.log(`Fecha de creación: ${tasks[i][3]}`);
        console.log(`Fecha de edición: ${tasks[i][6] ? tasks[i][6] : "No se ha editado la tarea"}`);
        console.log(`Fecha de vencimiento: ${tasks[i][4]}`);
        console.log(`Dificultad: ${tasks[i][5] === "1" ? "★☆☆" : tasks[i][5] === "2" ? "★★☆" : "★★★"}`);
    }
}