import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import CheckoutPage from './component/CheckoutPage.jsx';
import BuyTicketPage from './component/BuyTicketPage.jsx';
import HomePage from './component/HomePage.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BuyTicketPage/:concertId" element={<BuyTicketPage />} />
        <Route path='/CheckoutPage/:concertId' element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
