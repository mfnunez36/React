import React from 'react';

/*
    Podemos importar estilos que seran utilizados automaticamente 
    pero podemos importar estilos como modulos utilizando la palabra 
    module en el nombre del archivo ej.: nombreArchivo.module.css

    Podemos acceder a los modulos de estilos como objeto 
    con nombres simples pero para nombres compuestos debemos utilizar 
    [] ej.: styles.nombresimple - styles['nombre-compuesto']


    NOTA: 
    Importando estilos de forma automatica corremos 
    el riesgo de pisar estilos que tengan el mismo nombre pero 
    importando estilos en forma de modulo estos tendran nombres 
    con identificador unico por lo que es imposible que se pisen con 
    otros estilos con mismo nombre 
*/

// import './CompClase.css';

import styles from './CompClase.module.css'


/*COMPONENTE DE CLASE*/
class CompClase extends React.Component {
    
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
        /* 
            Para los estilos en REACT debemos utilizar camelcase para 
            los nombres compuestos ej.:

            const styles = {
                marginBottom: '1em',
                marginRight: '600px',
                borderRadius: '0.5em',
            }

            Podemos evaluar dentro de llaves para agregar logica ej.:
            const clases = `compClase ${ item ? 'compClase-change' : '' }`
        */
            

        const item = this.state.estado > 0;
        
        //utilizando estilos con importacio automatica
        //const clases = item ? 'compClase-change compClase' : 'compClase';
        //const clases = `compClase ${ item ? 'compClase-change' : '' }`
        

        //utilizando estilos con importacion de modulo
        const clases = `${ styles.compClase } ${ item ? styles['compClase-change'] : '' }`

        return (
            <div>
                <h3>{ this.props.name }</h3>
                <p> 
                    {/* en JSX se puede comentar con barras multilineas dentro de llaves */}

                    {/*  
                        Para agregar nuestros estilos debemos utilizar 
                        un objeto que los contenga enviandolos a la propiedads style: 
                        <div style={ styles }></div> 
                    */}
                    


                    {/* 
                        Para agregar estilos de clase debe ser con className 
                    */}
                    <div className={ clases }> Estado : { this.state.estado } </div>
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

export default CompClase;