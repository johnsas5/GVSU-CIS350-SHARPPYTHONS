import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FinancialData from "./FinancialData";
import Summary from "./Summary";
import NoPage from "./NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="FinancialData" element={<FinancialData />} />
        <Route path="Summary" element={<Summary />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App