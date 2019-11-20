import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import MusicBlogDrv from './MusicBlogDrv.js';

import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component {

    render() {
        return (
            <div>

                <Router>
                    <div className="App">
                        <Route exact path={'/:blng/tries/:tries'} component={MusicBlogDrv} />
                        <Route exact path={'/:blng/postid/:postId'} component={MusicBlogDrv} />

                        <Route exact path={'/:blng'} component={MusicBlogDrv} />
                        <Route exact path={'/'} component={MusicBlogDrv} />

                    </div>
                </Router>


            </div>

    );
  }
}

export default App;
