import React, { Component } from 'react';
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import './Container.css';

export default class Container extends Component {
    render() {
        let { page } = this.props
        return (
            <div className="container-right">
                {page === "contact" ? <Contact /> : page === "projects" ? <Projects /> : <Home />}
            </div>
        );
    }
}