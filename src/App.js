// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = " TextUtils-Dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = " TextUtils-Light mode";
    }
  };

  return (
    <div className={`container my-3 ${mode === 'dark' ? 'dark-mode' : ''}`}>
      <Navbar title="myTextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
