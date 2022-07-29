import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { List } from '../components/list'
import toJson from 'enzyme-to-json'

configure({
    adapter: new Adapter()
})

describe('Probando Componente </List>', () => {
    const data = [
        { id: 1, name: 'dato1' }, 
        { id: 2, name: 'dato2' }, 
    ]
    
    let wrapper
    // beforeEach() sirbe para tener una nueva instancia, se ejecuta antes de cada test
    beforeEach(() => {
        wrapper = shallow(<List title={'Lista Datos'} list={data}/>)
    })
    
    test('Validando renderizado y lista', () => {
        expect(wrapper.find('li').exists()).toBe(true) // or ".toBeTruthy()"
    })

    test('Validando actualizaciones de props', () => {   
        // ".setProps" de enzyme.shallow permite actualizar props
        wrapper.setProps({
            list: [{ id: 6, name: 'nuevo dato' }]
        })
        expect(wrapper.find('li').length).toBe(1)
        
        wrapper.setProps({
            title: 'Nuevo titulo'
        })
        expect(wrapper.find('h1').text()).toBe('Nuevo titulo')
                
    })
    
    test('Validar Snapshot', () => {
        /* "toJson" es una libreria de enzyme para convertir a marcado html un snapshot  
        * ".toMatchSnapShot" es parte de jest y 
        * sirbe para comparar el snapshot para saber si hubieron cambios en el componente 
        */
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})