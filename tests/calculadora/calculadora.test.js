import Calculadora from "../../calculadora/index.js";

describe("Testes da Calculadora", () => {
    test("Somar 1+2 deve retornar 3", () => {
        let esperado = 3;
        let obtido = Calculadora.somar(1, 2);

        expect(obtido).toBe(esperado);
    });

    test("Subtrair 5-3 deve retornar 2", () => {
        let esperado = 2;
        let obtido = Calculadora.subtrair(5, 3);

        expect(obtido).toBe(esperado);
    });

    test("Multiplicar 2*4 deve retornar 8", () => {
        let esperado = 8;
        let obtido = Calculadora.multiplicar(2, 4);

        expect(obtido).toBe(esperado);
    });

    test("Dividir 10/2 deve retornar 5", () => {
        let esperado = 5;
        let obtido = Calculadora.dividir(10, 2);

        expect(obtido).toBe(esperado);
    });
});