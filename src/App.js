import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import Head from './components/head/head.jsx';
import Navb from './components/navb/navb.jsx';
import Game from './components/game/game.jsx';
import Footer from './components/footer/footer.jsx';
function App(props) {
  return (
    <BrowserRouter>
    <div className='ap-wrapper' >
      <Head/>
      <Navb
      del={props.del} />

      <div className='ap-w-content'>
       <Game
       dispatch={props.dispatch}
       />
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
