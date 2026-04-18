

export function statusaluno (nota:number, freq: number):string {
    if (nota >= 70 && freq > 75) {
        return 'aprovado'
    } else if (nota >= 70 && freq <= 75) {
        return 'recuperação'
    }  

    return 'reprovado';
}