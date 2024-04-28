import Qrcode from "./pages/customer.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    <>
      <Router>
        <div className="App">
         
          <Routes>
            
            <Route exact path="/" element={<Qrcode />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;