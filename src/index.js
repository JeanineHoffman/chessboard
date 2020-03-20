import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Board } from './Components';
import observe from './Components/Game';

observe(knightPosition => {

ReactDOM.render(
    
    <Board knightPosition={ knightPosition } />,
     document.getElementById('root')
     )
}
)

