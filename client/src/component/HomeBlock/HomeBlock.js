import React, { Component, Fragment } from 'react';

export default class HomeBlock extends Component {
    render() {
        let { title, children, top } = this.props
        return (
            <Fragment>
                <div className={`corner-box ${top ? "" : "top-space"}`}></div>
                <h3>{title}</h3>
                <hr />
                {children}
            </Fragment>
        );
    }
}