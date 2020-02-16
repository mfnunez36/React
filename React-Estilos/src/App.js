import React from 'react';
import CompClase from './components/CompClase'

const App = () => (
    <CompClase name="Componente de Clase" descripcion="Este es el componente de Clase con PROPS con un calculo de 50 * 10 = " numeros={ 50 * 10 }></CompClase>
);

export default App;