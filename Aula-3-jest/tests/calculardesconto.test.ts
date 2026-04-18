import { calculardesconto } from "../src/calculardesconto";

describe("Função de calcular desconto", () => {

    it("Deve dar desconto se for maior que 100", () => {
        expect(calculardesconto(200)).toBe(180);
    });

    it("não deve apicar desconto quando valor for menor ou igual a 100", () => {
        expect(calculardesconto(100)).toBe(100);
    });
})