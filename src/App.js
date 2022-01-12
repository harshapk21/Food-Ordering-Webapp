
import Header from "./components/Header";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Auth from "./Screens/Auth";


function App() {
  return (
    <div>
    
    <Router>
        <div className="header-bar">
        <Header/>    
        </div>
        <div className="content">
        <Routes>
        
          <Route path="/Cart" element={<Cart/> } />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Login" element={<Auth/>} />)
          <Route path="/Home" element={<Home/>} />
          <Route path="/Menu/:id" element={<Menu/>} />
         
        </Routes>
        </div>
        
    </Router>
    </div>
   
  );
}



export default App;
