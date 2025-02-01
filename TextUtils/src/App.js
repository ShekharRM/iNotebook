
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import TextForms from './Components/TextForms'
import Alert from './Components/Alert';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


// let Name="shekar";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  }
  const togglemode1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#471007';
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils-Green Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }   


    
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" togglemode1={togglemode1} toggleMode={toggleMode} aboutText="About Us" mode={mode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs mode={mode} />}/>
            <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Try TextUtils - word counter, character counter, Clear text" mode={mode} />} />
          </Routes>
          {/* <TextForms showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
