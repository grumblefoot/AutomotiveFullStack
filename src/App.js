import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/homepage.js";
import Services from "./pages/Services/services.js";
import Layout from "./pages/Layout.js";
import Invoice from "./pages/Invoice/invoice.js";
import CustomerLookup from "./pages/Customer Lookup/customerlookup.js";
import IntakeForm from "./pages/IntakeForm/intakeform.js";
import OpenTickets from "./pages/Open Tickets/opentickets.js";


// Establish MySQL connection


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/CustomerLookup" element={<CustomerLookup />} />
            <Route path="/IntakeForm" element={<IntakeForm />} />
            <Route path="/OpenTickets" element={<OpenTickets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
