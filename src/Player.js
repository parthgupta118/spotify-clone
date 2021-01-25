import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Home from "./Home";
import { Route } from 'react-router';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Route exact path="/" render = { (props) => <Home spotify={spotify} />}  />
        <Route path="/playlist" render = { (props) => <Body spotify={spotify} />} />

        {/* <Body spotify={spotify} /> */}
      </div>

      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
