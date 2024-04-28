import Qrcode from "./pages/customer.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import OurTeam from '../src/pages/OurTeam.jsx'
import Home from "./components/start.jsx";
function App() {
  
  return (
    <>
      <Router>
        <div className="App">
         
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path="/customer" element={<Qrcode />} />
            <Route path="/ourteam" element={<OurTeam />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;