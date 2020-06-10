import React from 'react';
import './App.css';

import FactList from "./components/FactList"
import CatForm from "./components/CatForm"

function App() {
  return (
    <div className="App">
      <p>Cat Facts!</p>
      <CatForm />
      <FactList />
    </div>
  );
}

export default App;
