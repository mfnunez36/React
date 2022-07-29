import React from 'react'
/** ENZYME
 * configure: es para adaptar el test para montar componentes
 * Apapter: es para poder renderizar componentes
 * shallow: renderizado superficial y montado independiente contexto propio 
 * mount: para interactuar con apis del dom o componentes children conexto global
 * render: transforma el arbol de componentes para interactuar con el componente
 */
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

configure({
    adapter: new Adapter()
})

describe('Probando Componente </App>', () => {
    test('Testeando App buscando un elemento', () => {
        const wrapper = shallow(<App/>)
        
        // "wrapper.find()" sirbe para encontrar cualquier elemento o props del elemento 
        expect(wrapper.find('div').html()).toBe('<div><h1>Hello World!</h1><p name="parrafo">esto es un parrafo</p><div><h3>0</h3><button>increment</button><button>decrement</button></div></div>')
        expect(wrapper.find('div p').html()).toBe('<p name="parrafo">esto es un parrafo</p>')
        
        //de esta manera podemos acceder a las props de cada elemento
        expect(wrapper.find('[name="parrafo"]').html()).toBe('<p name="parrafo">esto es un parrafo</p>')
    })
})