
export function calcularFrete(valor: number): number {
    const verifica = valor > 200
    return verifica? 0 : 20
}