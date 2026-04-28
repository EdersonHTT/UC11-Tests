import { ehPar } from "../src/ehPar";

describe("Teste na funcao ehPar", () => {

    it("Deve ser true para 5", () => {
        expect(ehPar(2)).toBeTruthy();
    }) 

    it("Deve ser false para 5", () => {
        expect(ehPar(5)).toBeFalsy();
    }) 

})