import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>To Do's</h1>
      <div>
      <Todos />
      </div>
    </div>
  );
}

export default App;
