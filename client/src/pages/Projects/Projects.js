import React, { Component, Fragment } from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap';
import Card from '../../component/Card'
import CardModal from '../../component/Card/CardModal'
import StaticInfo from '../../data.json'
import API from '../../utils/API'
import './Projects.css'

export default class Projects extends Component {
    state = {
        modalShow: false,
        data: StaticInfo,
        info: {}
    }

    componentDidMount() {
        API
            .getAllProject()
            .then(res => this.setState({ data: res.data }, () => console.log(this.state.data)))
            .catch(err => console.log(err))
    }

    render() {
        let { data } = this.state

        // open modal
        const modalOpen = () => this.setState({ modalShow: true })

        // close modal
        const modalClose = () => this.setState({ modalShow: false })

        // add info to modal
        const pullInfo = info => {
            this.setState({ info }, () => console.log(this.state.info))
        }

        // project cards
        const renderCards = data.map((card, i) => {
            return (
                <Card key={i} info={card} infoFunction={pullInfo} onOpen={modalOpen}/>
            )
        })

        return (
            <Fragment>
                <ButtonToolbar>
                    <CardModal show={this.state.modalShow} onHide={modalClose} chosen={this.state.info}/>
                </ButtonToolbar>
                <div className="container-project">
                    <Row>
                        {renderCards}
                    </Row>
                </div>
            </Fragment>
        );
    }
}