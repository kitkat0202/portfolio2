import React, { Component, Fragment } from 'react';

export default class HomeBlockSub extends Component {
    handleStatus = () => {
        const { name, func } = this.props
        func(name)
    }

    render() {
        const { children, title, year, position, location, openStat} = this.props
        return (
            <Fragment>
                <div className={openStat ? "bgc-white home-sup-section" : "home-sup-section"}>
                    { openStat ? <i className="fas fa-caret-down caret" onClick={this.handleStatus}></i> : <i className="fas fa-caret-up caret" onClick={this.handleStatus}></i> }
                    <h5 className="home-sub-title" onClick={this.handleStatus}>{title}</h5>
                    <p><span className="bolder">Year: </span>{year}</p>
                    { position === "" ? "" : <p><span className="bolder">Position: </span>{position}</p> }
                    <p><span className="bolder">Location: </span>{location}</p>
                    { openStat ? children : "" }
                </div>
            </Fragment>
        );
    }
}