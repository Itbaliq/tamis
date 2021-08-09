import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import Head from './components/head/head.jsx';
import Navb from './components/navb/navb.jsx';
import Game from './components/game/game.jsx';
//import Profile from './components/profile/profile.jsx';
//import Operations from './components/operations/operations.jsx';
//import Angime from './components/angime/angime.jsx';
import Footer from './components/footer/footer.jsx';
function App(props) {
  return (
    <BrowserRouter>
    <div className='ap-wrapper' >
      <Head/>
      <Navb
      del={props.del} />

      <div className='ap-w-content'>
       <Game/>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
