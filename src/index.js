import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Board } from './Components';

ReactDOM.render(
    <Board knightPosition={ [0,0] } />,
     document.getElementById('root')
     );


