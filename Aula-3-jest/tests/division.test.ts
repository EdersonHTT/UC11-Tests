import { division } from "../src/division";

describe("Função dividir", () => {
    it("deve dividir corretamente", () => {
        expect(division(10,2)).toBe(5);
    })

    it("deve dar erro", () => {
        expect(() => division(10,0)).toThrow();
    })
})