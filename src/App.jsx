import Qrcode from "./pages/customer.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import OurTeam from '../src/pages/OurTeam.jsx'
function App() {
  
  return (
    <>
      <Router>
        <div className="App">
         
          <Routes>
            
            <Route exact path="/" element={<Qrcode />} />
            <Route path="/ourteam" element={<OurTeam />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;