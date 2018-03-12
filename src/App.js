import React, { Component } from 'react';

import MusicBlog from './MusicBlog.js';
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router'

class App extends Component {


    render() {
        return (
          <div className="App">
              <MusicBlog url="russian" />
              <MusicBlog url="polish" />
              <MusicBlog url="southslavic" />
              <MusicBlog url="romanian" />

          </div>
    );
  }
}

export default App;
