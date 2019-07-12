import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ProfPic from '../../images/IMG_7492.JPG'
import './Nav.css'

export default class Nav extends Component {
    navClick = event => {
        let { id }  = event.target
        let { changePageFunc } = this.props
        changePageFunc(id)
    }
    
    render() {
        let { currentPage } = this.props
        let renderLink = ["home", "portfolio", "contact"].map((link, i) => {
            return (
                <li key={i} onClick={this.navClick}>
                    <Link to={`/${link}`}>
                        <p className={`nlink ${currentPage === link ? "nlinkActive" : ""}`} id={`${link}`}>
                            {link}
                        </p> 
                    </Link>
                </li>
            )
        })
        return (
            <div className="navbox">
                <div className="navbox-profile">
                    <div className="profile-img">
                        <img src={ProfPic} alt="Katherine He Profile"/>
                    </div>
                    <h1 className="profile-name">Katherine</h1>
                    <h2 className="profile-position">Full-stack Developer</h2>
                    <hr />
                </div>
                <div className="navbox-links">
                    <ul>
                        <Router>{renderLink}</Router>
                    </ul>
                </div>
            </div>
        );
    }
}