import React from 'react';
import {NavLink} from "react-router-dom";
import b from './navb.module.css';

const Navb =(props) =>{
  return    (
    <nav className={b.navb}>
      <div className={`${b.item} ${b.activeLink}`}>
        <NavLink to="/game" activeClassName={b.activeLink}>Game</NavLink>
      </div>
    </nav>)
}

export default Navb
