import React, { Component } from "react";
import {MenuItem} from "./component/MenuItem"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItem">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                </div>
                <ul>
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