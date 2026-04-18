import { statusaluno } from "../src/statusaluno"


describe("funcão statusaluno", () => {

    it("deve retornar aprovado com nota acima ou igual 70 e frequencia superior a 75", () => {
        expect(statusaluno(70, 76)).toBe("aprovado")
    })

    it("deve retornar recuperação com nota acima ou igual 70 e frequencia inferior ou igual a 75", () => {
        expect(statusaluno(70, 75)).toBe("recuperação")
    })

    it("deve retornar reprovado com nota abaixo 70 e frequencia inferior ou igual a 75", () => {
        expect(statusaluno(69, 75)).toBe("reprovado")
    })
})