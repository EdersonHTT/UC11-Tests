import { ehpar } from "../src/ehpar"


describe("Função ehpar", () => {

    it("deve retornar true para número par", () => {
        expect(ehpar(4)).toBeTruthy();
    })

    it("deve retornar false para número impar", () => {
        expect(ehpar(3)).toBeFalsy();
    })
})