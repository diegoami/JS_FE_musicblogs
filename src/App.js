import React, { Component } from 'react';

import MusicBlog from './MusicBlog.js';
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {


    render() {
        return (
            <Router>
              <div className="App">
                  <Route path={'/:blogLng'} component={MusicBlogDrv} />

              </div>
            </Router>
    );
  }
}

const MusicBlogDrv = ({ match }) => (
   <MusicBlog url={match.params.blogLng} />
);


export default App;
