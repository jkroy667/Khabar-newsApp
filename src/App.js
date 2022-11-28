import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Alert  from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setprogress] = useState(0);
  const [alert, setAlert] = useState(null);
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
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
        <Alert alert={alert} />
        <Switch>
            <Route exact path="/"><News setProgress={setprogress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News setProgress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={setprogress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News setProgress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            <Route exact path="/login"><Login showAlert={showAlert}/></Route>
            <Route exact path="/signup"><Signup showAlert={showAlert}/></Route>
         </Switch>
         </Router>
      </div>
    )
}

export default App;


