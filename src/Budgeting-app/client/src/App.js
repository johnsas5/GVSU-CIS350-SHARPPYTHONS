import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import FinancialData from "./FinancialData/FinancialData";
import Summary from "./Summary/Summary";
import NoPage from "./NoPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="FinancialData" element={<FinancialData />} />
          <Route path="Summary" element={<Summary />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
