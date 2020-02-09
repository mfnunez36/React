import React from 'react';
import ReactDom from 'react-dom';

const name = "nombre";
const App = <h1>Hola Mundo { name }</h1>;
const root = document.getElementById('root');

/*Componentes*/
const Comp1 = () => {
    return(
        <div>
            <h3>Compoenente 1</h3>
            <p>Este es el componente 1</p>
        </div>
    );
};

const Comp2 = () => (
    <div>
        <h3>Compoenente 2</h3>
        <p>Este es el componente 2</p>  
        <div>
            <hr/>
            <p>
                Aqui insertamos el componente 1
                Nota: Si utilizas componentes con etiqueta de apertura y cierre
                puedes agregar contenido dentro de las etiquetas
            </p>
            <Comp1></Comp1>
            <hr/>
        </div>
    </div>
);

/*PROPS*/
const Comp3 = (props) => {
    return(
        <div>
            <h3>{ props.name }</h3>
            <p> 
                { props.descripcion }
                { props.numeros }
            </p>
        </div>
    );
};

const Comp4 = () => (
    <Comp3 name="Componente 3" descripcion="Este es el componente 3 con PROPS" numeros={ 50 * 10 }></Comp3>
);



/*ReactDom render*/
//resive el elemento que va a utilizar y 
//el elemento donde se montara
ReactDom.render(<Comp4/>, root); 