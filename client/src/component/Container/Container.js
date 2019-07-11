import React, { Component } from 'react';
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Error from '../../pages/404'
import './Container.css';

export default class Container extends Component {
    render() {
        let { page } = this.props

        return (
            <div className="container-right">
                {page === "contacts" || page === "contact" ? <Contact /> : page === "portfolio" ? <Projects /> : page === "home" || page === "/" || page === "" ? <Home /> : <Error />}
            </div>
        );
    }
}