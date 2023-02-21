import React, { useState } from 'react';
import './App.css';
import ShoppingCard from './shoppingcard/ShoppingCard';

function App() {

  const [sumUSD, setSumUSD] = useState([])
  return (
    <div className="App">
    <ShoppingCard/>
    </div>
  );
}

export default App;
