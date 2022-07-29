import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { Contador } from '../components/contador'

configure({
    adapter: new Adapter()
})

describe('Probando Componente Contador', () => {
    let wrapper
    // beforeEach() sirbe para tener una nueva instancia, se ejecuta antes de cada test
    beforeEach(() => {
        wrapper = shallow(<Contador/>)
    })

    test('Validando Snapshot', ()=>{
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('Validando funcionamiento de Botones', ()=>{
        // con simulate() podemos simular eventos
        wrapper.find('button').first().simulate('click')
        expect(wrapper.find('h3').text()).toBe("1")
    })
})