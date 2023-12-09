import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";




function App() {
  const[mode,setMode] = useState('light');//whether dark mode is enabled or not

  const[mode1,setMode1] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - DarkMode';
      // Used to set the name
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing mode';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'TextUtils now';
      // },1500);
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    document.title = 'TextUtils - LightMode';
    }
  }

  const toggleMode2 = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'green';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'red';
    }
  }


  return (
    <div className="App">
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
        <Alert alert={alert}/>
        <div className="container my-3">
         
        {/* <About/> */}
        </div>
        <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below-"  mode={mode} showAlert={showAlert}/>}>
              
            </Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
