import { Arrays } from "../utils/arrays";

describe('Probando Listas Arrays', () => {
    test('Agregando datos y obteniendolos', () => {
        
        const data = Arrays()  
        data.adds('dato1')
        data.adds('dato2')

        // ".toStrictEqual" evalua lo que recibe exactamente igual al valor
        expect(data.getData()).toStrictEqual([ 'dato1', 'dato2' ])
    })

    test('Agregando datos y comparando 1 dato especifico', () => {
        
        const data = Arrays()  
        data.adds('dato1')
        data.adds('dato2')
        data.adds('dato3')

        // ".toContain" recibe y evalua si existe el valor
        expect(data.getData()).toContain('dato2')
        expect(data.getData()).not.toContain('dato4')
    })

    test('Agregando datos y comparando longitud', () => {
        
        const data = Arrays()  
        data.adds('dato1')
        data.adds('dato2')
        data.adds('dato3')

        // ".toHaveLength" recibe y evalua el largo del array
        expect(data.getData()).toHaveLength(3)
    })

    test('Agregando datos como objetos', () => {
        const data = Arrays()

        data.adds({ name: 'dato1', other: 'more data' })
        data.adds({ name: 'dato2', other: 'more data2' })
        
        expect(data.getData()).toContainEqual({ name: 'dato1', other: 'more data' })
    })
})