import { soma } from "../src/sum"

test('deve somar dois numeros', () => {
    expect(soma(2, 3)).toBe(5);
})