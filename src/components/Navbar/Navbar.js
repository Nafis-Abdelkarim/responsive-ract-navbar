import React, { Component } from "react";
import {MenuItem} from "./MenuItem"
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handelClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handelClick}>
                    <i className={this.state.clicked ? 'fa fa-times':'fas fa-bars'}></i>
                </div>
                <ul>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}></ul>
                    {
                        MenuItem.map((item, index) => {
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar