import React, { Component } from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import { Tooltip } from 'reactstrap';

import './NavTab.css';


class NavTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nav_russian: false,
            nav_polish: false,
            nav_romanian: false,
            nav_southslavic: false,
            nav_easteurope: false,
            nav_french: false,
            nav_italian: false
        }
    }




    render() {


        return (
            <div>

                    <Nav tabs>

                        <NavItem id="nav-russian">
                            <NavLink href="/russian" active={this.props.active === 'russian'}>Russia/Ukraine</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip" placement="bottom" isOpen={this.state.nav_russian} target="nav-russian" toggle={e => {this.setState(prevState => ({ nav_russian : !prevState.nav_russian}))}}>
                            Music from Russia & Ukraine
                        </Tooltip>
                        <NavItem id="nav-polish">
                            <NavLink href="/polish" active={this.props.active === 'polish'}>Poland</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip" placement="bottom" isOpen={this.state.nav_polish} target="nav-polish" toggle={e => {this.setState(prevState => ({ nav_polish : !prevState.nav_polish}))}}>
                            Music from Poland
                        </Tooltip>
                        <NavItem id="nav-romanian">
                            <NavLink href="/romanian" active={this.props.active === 'romanian'}>Romania</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip" placement="bottom" isOpen={this.state.nav_romanian} target="nav-romanian" toggle={e => {this.setState(prevState => ({ nav_romanian : !prevState.nav_romanian}))}}>
                            Music from Romania
                        </Tooltip>
                        <NavItem id="nav-southslavic">
                            <NavLink href="/southslavic" active={this.props.active === 'southslavic'}>Balkans</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip bigtooltip" placement="bottom" isOpen={this.state.nav_southslavic} target="nav-southslavic" toggle={e => {this.setState(prevState => ({ nav_southslavic: !prevState.nav_southslavic}))}}>
                            Music from Slovenia, Croatia, Serbia, Bulgaria
                        </Tooltip>
                        <NavItem id="nav-easteurope">
                            <NavLink href="/easteurope" active={this.props.active === 'easteurope'}>Central Europe</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip bigtooltip" placement="bottom" isOpen={this.state.nav_easteurope} target="nav-easteurope" toggle={e => {this.setState(prevState => ({ nav_easteurope: !prevState.nav_easteurope}))}}>
                            Music from the Czech Republic, Slovakia, Hungary
                        </Tooltip>
                        <NavItem id="nav-french">
                            <NavLink href="/french" active={this.props.active === 'french'}>France</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip" placement="bottom" isOpen={this.state.nav_french} target="nav-french" toggle={e => {this.setState(prevState => ({ nav_french: !prevState.nav_french}))}}>
                            Music from France
                        </Tooltip>
                        <NavItem id="nav-italian">
                            <NavLink href="/italian" active={this.props.active === 'italian'}>Italy</NavLink>
                        </NavItem>
                        <Tooltip className="tooltip" placement="bottom" isOpen={this.state.nav_italian} target="nav-italian" toggle={e => {this.setState(prevState => ({ nav_italian: !prevState.nav_italian}))}}>
                            Music from Italy
                        </Tooltip>
                    </Nav>

            </div>

        );
    }
}

export default NavTab;
