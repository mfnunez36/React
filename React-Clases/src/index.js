import React from 'react';
import ReactDom from 'react-dom';

/*COMPONENTE DE CLASE*/
class CompClase extends React.Component {

    /*Sin Inicializador de Propiedad se utiliza Constructor*/
    // constructor() {
    //     super()

    //     const METHODS = [
    //         'cambiar',
    //         'volver'
    //     ]

    //     METHODS.forEach((method) => {
    //         this[method] = this[method].bind(this);
    //     });

    //     this.state = {
    //         estado: 0
    //     }
    // }



    /*Con inicializador de Propiedad los metodos 
    deben ser de flechas ya que heredan el this del padre
    No forman parte del estandar de react*/
    state = {
        estado: 0
    }

    cambiar = () => { 
        this.setState({ 
            estado: this.state.estado = 1 
        });
    }

    volver = () => { 
        this.setState({ 
            estado: this.state.estado = 0 
        });
    }

    render = () => {
        return (
            <div>
                <h3>{ this.props.name }</h3>
                <p> 
                    <div> Estado : { this.state.estado } </div>

                    <button onClick={ 
                         this.cambiar
                    }>Cambiar</button>

                    <button onClick={ 
                         this.volver
                    }>Volver</button>

                    <hr/>
                    { this.props.descripcion }
                    { this.props.numeros }
                </p>
            </div> 
        );    
    }
}

const Comp = () => (
    <CompClase name="Componente de Clase" descripcion="Este es el componente de Clase con PROPS con un calculo de 50 * 10 = " numeros={ 50 * 10 }></CompClase>
);



/*ReactDom render*/
//resive el elemento que va a utilizar y 
//el elemento donde se montara
const root = document.getElementById('root');
ReactDom.render(<Comp/>, root);