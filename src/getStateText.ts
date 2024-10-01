export function getStateText(stateNumber: string): string {
    if (stateNumber === "1") {
        return "Pendiente";
    } else if (stateNumber === "2") {
        return "En progreso";
    } else if (stateNumber === "3") {
        return "Terminada";
    } else {
        return "Desconocido";
    }
}