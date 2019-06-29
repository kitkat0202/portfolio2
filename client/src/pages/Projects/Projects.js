import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap';
import Card from '../../component/Card'
import API from '../../utils/API'
import './Projects.css'

export default class Projects extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        API
            .getAllProject()
            .then(res => this.setState({ data: res.data }, () => console.log(this.state.data)))
            .catch(err => console.log(err))
    }

    render() {
        let { data } = this.state

        let renderCards = data.map((card, i) => {
            return (
                <Card key={i} info={card}/>
            )
        })

        return (
            <Fragment>
                <Row>
                    {renderCards}
                </Row>
            </Fragment>
        );
    }
}