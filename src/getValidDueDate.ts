import { isValidDate } from './isValidDate';
import promptSync from "prompt-sync";
const prompt = promptSync();

export function getValidDueDate(createdAt: string): string {
    let dueDate: string;
    do {
        dueDate = prompt("Fecha de vencimiento (opcional, formato AAAA-MM-DD): ").trim();
        if (dueDate === "") {
            return "Sin vencimiento";
        }
        if (!isValidDate(dueDate)) {
            console.log("La fecha de vencimiento debe ser válida, en el formato correcto y dentro de un rango de años razonable.");
        } else if (new Date(dueDate) <= new Date(createdAt)) {
            console.log("La fecha de vencimiento debe ser posterior a la fecha de creación.");
        }
    } while (!isValidDate(dueDate) || new Date(dueDate) <= new Date(createdAt));
    return dueDate;
}