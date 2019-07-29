import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfPic from '../../images/IMG_7492.JPG'
import './Nav.css'

export default class Nav extends Component {
    state = {
        currentPage: ""
    }

    pageChange = event => {
        let { id }  = event.target
        this.setState({ currentPage: id })
    }

    componentDidMount() {
        this.setState({ currentPage: window.location.pathname.replace("/", "") })
    }

    render() {
        let { currentPage } = this.state
        let renderLink = ["home", "portfolio", "contact"].map((link, i) => {
            return (
                <li key={i} onClick={this.pageChange}>
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
                        {renderLink}
                    </ul>
                </div>
            </div>
        );
    }
}