import { soma } from "./soma";

describe("Soma", () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
})