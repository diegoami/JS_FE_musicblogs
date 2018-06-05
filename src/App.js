import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MusicBlog from './MusicBlog.js';
import { Nav, NavItem, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <p>View music from:
                    <Nav tabs>
                        <NavItem>
                            <NavLink href="/italian">Italy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/russian">Russia/Ukraine</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/french">France</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/polish">Poland</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/romanian">Romania</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/southslavic">Balkans</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/easteurope">Central Europe</NavLink>
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
