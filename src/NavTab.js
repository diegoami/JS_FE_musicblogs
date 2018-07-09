import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import './NavTab.css';

class NavTab extends Component {

    render() {
        return (
            <div>
                <p><h2>Select music from:</h2>
                    <Nav tabs>

                        <NavItem>
                            <NavLink href="/russian" active={this.props.active == 'russian'}>Russia/Ukraine</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/polish" active={this.props.active == 'polish'}>Poland</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/romanian" active={this.props.active == 'romanian'}>Romania</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/southslavic" active={this.props.active == 'southslavic'}>Balkans</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/easteurope" active={this.props.active == 'easteurope'}>Central Europe</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/french" active={this.props.active == 'french'}>France</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/italian" active={this.props.active == 'italian'} >Italy</NavLink>
                        </NavItem>
                    </Nav>
                </p>

            </div>

        );
    }
}

export default NavTab;