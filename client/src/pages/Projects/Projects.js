import React, { Component, Fragment } from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap';
import Card from '../../component/Card'
import CardModal from '../../component/Card/CardModal'
// import StaticInfo from '../../data.json'
import API from '../../utils/API'
import './Projects.css'

export default class Projects extends Component {
    state = {
        modalShow: false,
        data: [],
        info: {}
    }

    componentDidMount() {
        API
            .getAllProject()
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        let { data } = this.state
        console.log(data)
        // open modal
        const modalOpen = () => this.setState({ modalShow: true })

        // close modal
        const modalClose = () => this.setState({ modalShow: false })

        // add info to modal
        const pullInfo = info => {
            this.setState({ info })
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
                <img className="project-bg-img" src="https://lh3.googleusercontent.com/Fs9ENXRtlF4irD8ehsPwjdIgWiTnnkYei6PN0gsyzpTm9nXm8fIOlr6HQTBqYlDfsqUGcFS0TgcrYDwnsEhXDNtdOhnRP1-oRlP-qpTsjKfV0d2guPpOS9vg9rzBdcgsCFJnCMAYTei5HWMFaCH9F2rgG_E5yt09XtvpP8rVD3JvqiepncsC7eTZHPW8bn-G4oZU9GmrofNo5vWzw4QMfQWqDGVlrtd89uzqu2kqwxvvcobC1YdgRKoxe_1wwvSWaBD5NoA0zvX8sP07hGHzz0EaRBFBZkL1lEuli3U1PGiJtgq62gCfDR4dgpl3Y6Yh5zFsBGC8JGZi9ceSNFCgpixXFE1VZ--l86SJanyl0UZbSA2nhFwKZ3x4zQmLay_tsAIzUC-8e_SK3_L_Z13ZMLyvNDKPDqMAYt6tSKoiALBGpqPQiCkxMDlkXlKx050SFnxR_w5u49BRw0pRbAlflKc_Np4SugDUs730O63Hhft9XIrWkepQt0RpRe8JCRAY449pkvugIoDQ-yabwIBnj6ey-y5J6OZAqis8meKTku-r4I7UtlkX6lko-UgGClPNj1GfyPBQLq1GmSRR0_z2dsP2r6_VWsoocVmylXcbIbfEq1ujWVjfFL2UoXDBvTcQ4sq7S5lTMiCX8qmTBhUEqRtNVdm2HYk=w2054-h1542-no" alt="mountain" />
            </Fragment>
        );
    }
}