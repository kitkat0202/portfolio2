import React, { Component, Fragment } from 'react'
import './404.css'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="div-404">
                    <h3 className="title-404">404 Error</h3>
                    <p className="p-404">This page does not exist</p>
                    <p className="p-404">Please bo back to <a href="/home">Home</a> page</p>
                </div>
            </Fragment>
        );
    }
}