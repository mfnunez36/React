import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

/*ReactDom render*/
//resive el elemento que va a utilizar y 
//el elemento donde se montara
const root = document.getElementById('root');
ReactDom.render(<App/>, root);