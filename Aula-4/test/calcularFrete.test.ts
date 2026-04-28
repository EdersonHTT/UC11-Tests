import { calcularFrete } from "../src/calcularFrete"

describe("Teste na funcao calcularFrete", () => {

    it("Deve retornar 0 se 250 for maior 200", () => {
        expect(calcularFrete(250)).toBe(0);
    }) 

    it("Deve retornar 20 se 100 for menor 200", () => {
        expect(calcularFrete(100)).toBe(20);
    }) 

})