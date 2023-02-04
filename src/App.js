import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert  from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Game from "./components/Game";



function App() {
  const [alert, setAlert] = useState(null)

 
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);

   
}
  return (
    <>
     
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Game /> }></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route exact path="/Signup" element={<Signup showAlert={showAlert} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
  
    </>
  );
}

export default App;
