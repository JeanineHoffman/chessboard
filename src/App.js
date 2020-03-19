import React from 'react';
import './App.css';
import { Knight, Square, Board } from './Components';

function App() {
  return (
    <div className="App">
      <Square black>
      <Knight />
      </Square>
    </div>
  );
}

export default App;
