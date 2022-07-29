import { Saludar, Despide, GetId } from "../utils/strings.js";

describe('Prueba de strings', () => {
    const saludo = Saludar('Max')
    const getId = GetId()
    const despide = Despide()

    test('probando Saludar', () => {
        // ".toMatch()" evalua si existe dentro de lo que se espera o recibe 
        expect(saludo).toMatch('Hola')
    })

    test('probando Despide', () => {
        expect(despide).not.toMatch('Hola')
    })

    test('probando GetId', () => {
        // puede recibir regex
        expect(getId).toMatch(/\d{3}-\d{2}/)
    })
})