import React from 'react';
import './App.css';

import FactList from "./components/FactList"
import CatForm from "./components/CatForm"

function App() {
  return (
    <div className="App">
      <h1>Cat Facts!</h1>
      <CatForm />
      <FactList />
    </div>
  );
}

export default App;
