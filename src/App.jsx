import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/start.jsx";
import SellerLogin from "./pages/s_login.jsx";
//import MLogin from "./pages/m_login.jsx";
import ManufacturerLogin from "./pages/m_login.jsx";
import Manuf from "./pages/manufacturer/index/index.jsx";
import AddProduct from "./pages/manufacturer/addProduct.jsx";
import Qrcode from "./pages/customer.jsx";
import AddSeller from "./pages/manufacturer/addSeller.jsx";
import SellToSeller from "./pages/manufacturer/sellToSeller.jsx";
import SellToCustomer from "./pages/seller/sellToCustomer.jsx";
// // import About from "./components/about.js";
// import Contact from "./components/contact.js";
// import DisableBrowserNavigation from "./components/DisableBrowserNavigation.jsx";
import { ToastContainer } from "react-toastify";
function App() {
  const [address, setAddress] = useState("");
  const [brandName, setBrandName] = useState("");
  const [manuId, setManuId] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <Router>
        <div className="App">
          {/* <DisableBrowserNavigation /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sellerlogin" element={<SellerLogin />} />
            <Route 
              path="/manufacturerlogin"
              element={
                <ManufacturerLogin
                  setAddress={setAddress}
                  setBrandName={setBrandName}
                  setCity={setCity}
                  setManuId={setManuId}
                />
              }
            />
            <Route
              path="/manufacturer"
              element={
                <Manuf brandName={brandName} manuId={manuId} city={city} />
              }
            />
            <Route
              path="/manufacturer/addProduct"
              element={<AddProduct address={address} />}
            />
            <Route path="/consumerlogin" element={<Qrcode />} />
            <Route
              path="/manufacturer/addSeller"
              element={<AddSeller address={address} />}
            />
            <Route
              path="/manufacturer/selltoseller"
              element={<SellToSeller address={address} />}
            />
            <Route
              path="/selltoConsumer"
              element={<SellToCustomer address={address} />}
            />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;