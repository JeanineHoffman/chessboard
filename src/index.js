import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Board } from './Components';
import observe from './Components/Game';

observe(knightPosition => {

ReactDOM.render(
    
    <Board knightPosition={ knightPosition } />,
     document.getElementById('root')
     )
}
)

