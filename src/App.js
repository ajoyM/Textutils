import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import NoteState from './context/notes/noteState';



const name = "Asmita";
const element = <h1>Hello, {name}</h1>



function App() {
  const [mode, setMode] = useState('light');
  const removeBackground = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    console.log(cls);
    removeBackground()
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    {/* <NoteState> */}
    <Router>
     <Navbar title={name} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <About /> */}
      <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
      </div>
    </Router>
    {/* </NoteState> */}
    </>
  );
}

export default App;
