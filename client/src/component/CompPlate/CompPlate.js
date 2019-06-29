import React, { Component, Fragment } from 'react';
import './CompPlate.css';

export default class CompPlate extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.children}</h1>
            </Fragment>
        );
    }
}