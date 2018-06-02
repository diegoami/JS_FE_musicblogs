import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MusicBlog from './MusicBlog.js';
import { Nav, NavItem, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {


    render() {
        return (
            <div>
                <p>Pick music:
                    <Nav tabs>
                        <NavItem>
                            <NavLink href="/italian">Italian</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/russian">Russian</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/french">French</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/polish">Polish</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/romanian">Romanian</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/southslavic">South Slavic</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/easteurope">East Europe</NavLink>
                        </NavItem>
                    </Nav>
                </p>
              <Router>
              <div className="App">
                  <Route path={'/:blogLng'} component={MusicBlogDrv} />
                  <Route exact path={'/'} component={MusicBlogRandom} />

              </div>
            </Router>
            </div>
    );
  }
}
const blogs = ['italian', 'russian', 'french', 'polish', 'romanian', 'southslavic', 'easteurope']

const MusicBlogDrv = ({ match }) => (
   <MusicBlog url={match.params.blogLng} />
);


const MusicBlogRandom = () => (

    <MusicBlog url={blogs[Math.floor(Math.random()*blogs.length)]} />
);

export default App;
