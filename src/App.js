import React from 'react';
import { Navbar } from './app/Navbar';
import { QueryForm } from './features/queries/QueryForm';
import { ResultsList } from './features/results/ResultsList';
import './App.css';

//React Component for Landing Page UI
function App() {
  return (
    <div className="App">
        <Navbar />
        <QueryForm />
        <ResultsList />
    </div>
  );
}

export default App;
