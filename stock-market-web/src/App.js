import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import StockList from './myComponents/StockList';
import StockDetails from './myComponents/StockDetails';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" exact element={<StockList />} />
          <Route path="/stock/:symbol" element={<StockDetails />} />
    </Routes>
    </Router>
  );
}

export default App;