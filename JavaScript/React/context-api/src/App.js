import React, { useState } from 'react';
import './App.css';
import MyContext from './context/MyContext';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';

function App() {
  const [val, setVal] =useState({
    name: ''
  });
  return (
    <div className="App">
      <MyContext.Provider value={{val, setVal}}>
      <Navbar />
      <FormWrapper />
      </MyContext.Provider>
    </div>
  );
}

export default App;
