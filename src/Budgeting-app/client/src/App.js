import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Home/Home";
import FinancialData from "./FinancialData/FinancialData";
import Summary from "./Summary/Summary";
import NoPage from "./NoPage";
import "./App.css";
import { AuthProvider } from "./AuthContext";

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="FinancialData" element={<FinancialData />} />
            <Route path="Summary" element={<Summary />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
