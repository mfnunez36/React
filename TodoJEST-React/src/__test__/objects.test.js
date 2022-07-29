import { Objects } from "../utils/objects";

describe('Probando Objetos', () => {
    test('Agregar data', () => {
        const items = Objects()
        items.adds({
            id: 1,
            name: 'item1',
            other: 'data'
        })

        expect(items.getData()[0]).toEqual({
            id: 1,
            name: 'item1',
            other: 'data'
        })
    })

    test('Buscar ItemByID', () => {
        const items = Objects()
        items.adds({
            id: 1,
            name: 'item1',
            other: 'data'
        })
        items.adds({
            id: 2,
            name: 'item2',
            other: 'data2'
        })

        expect(items.getDataById(1)[0]).toEqual({
            id: 1,
            name: 'item1',
            other: 'data'
        })
    })

    test('Buscar ItemByID si existe propiedad', () => {
        const items = Objects()
        items.adds({
            id: 1,
            name: 'item1',
            other: 'data'
        })
        items.adds({
            id: 2,
            name: 'item2',
            other: 'data2'
        })

        expect(items.getDataById(1)[0]).toHaveProperty('id', 1)
    })
})