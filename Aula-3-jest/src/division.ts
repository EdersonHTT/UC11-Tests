export function division(a: number, b: number): number {

    if(b === 0) {
        throw new Error("Divisão por zero")
    }

    return a / b;
}