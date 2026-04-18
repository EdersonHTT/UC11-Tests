import { verifyyears } from "../src/verifyyears"


describe("Funcao verifyyears", () => {

    it("deve 18 ser maior de idade", () => {
        expect(verifyyears(18)).toBeTruthy();
    })

    it("deve 15 ser menor de idade", () => {
        expect(verifyyears(15)).toBeFalsy();
    })
})