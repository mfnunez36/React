import { Primitivos } from '../utils/primitivos'

describe('Probando Valores boleanos, undefined y null', () => {
    test('Validar si un valor esta definido', () => {
        /* ".toBeDefined" valida si una propiedad esta definida 
            solo puede validar cuando recibimos undefined
        */
        expect(Primitivos('definido')).toBeDefined()
    })

    test('Validar si un valor es nulo', () => {
        /* ".toBeNull" valida si una propiedad es nula 
            solo puede validar cuando recibimos null
        */
        expect(Primitivos()).toBeNull()
    })

    test('Validar si un valor es verdadero', () => {
        /* ".toBeTruthy" valida si una propiedad es verdadera 
            solo puede validar cuando recibimos true or false
        */
        expect(Primitivos('verdadero')).toBeTruthy()
    })

    test('Validar si un valor es falso', () => {
        /* ".toBeFalsy" valida si una propiedad es falsa 
            solo puede validar cuando recibimos true or false
        */
        expect(Primitivos('falso')).toBeFalsy()
    })

    test('Validar si un valor es NaN', () => {
        // ".toBeNaN" valida valor NaN   
        expect(NaN).toBeNaN()
    })
})