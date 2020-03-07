import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Ryan'} lastName={'Richer'} age={300} hairColor={'purple'} />
      <PersonCard firstName={'Duy'} lastName={'Vu'} age={12} hairColor={'green'} />
      <PersonCard firstName={'Sara'} lastName={'Something'} age={5} hairColor={'blue'} />
      <PersonCard firstName={'Pete'} lastName={'Pete'} age={1000} hairColor={'black'} />
    </div>
  );
}

export default App;
