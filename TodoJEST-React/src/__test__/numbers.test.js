import { Suma, Resta, Division, Multiplicacion, GetRandom } from '../utils/numbers' 

describe('Probando Operaciones Matematicas', () => {    
    test('Sumar', () => {
        // ".toBe" metodo que compara los valores
        expect(Suma(10, 3)).toBe(13)
    })

    test('Restar', () => {
        expect(Resta(10, 3)).toBe(7)
    })

    test('Division', () => {
        expect(Division(9, 3)).toBe(3)
    })

    test('Multiplicacion', () => {
        expect(Multiplicacion(10, 3)).toBe(30)
    })

    test('Random entre 2 numeros', () => {
        /** 
        ".toBeGreaterThan" - recibe el valor de donde comienza y se espera desde un valor mayor
        ".toBeGreaterThanOrEqual" - recibe el valor de donde comienza y se espera desde un valor igual 
        ".toBeLessThan" - recibe el valor de donde comienza y se espera desde un valor menor
        ".toBeLessThanOrEqual" - recibe el valor de donde comienza y se espera desde un valor menor 
        **/
        expect(GetRandom(5, 20)).toBeGreaterThan(4)
    })
})