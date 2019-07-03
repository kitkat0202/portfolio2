import React, { Component, Fragment } from 'react'
import Block from '../../component/HomeBlock/HomeBlock'
import Sub from '../../component/HomeBlock/HomeBlockSub'
import './Home.css'

export default class Home extends Component {
    state = {
        UB: true,
        COL: true,
        FS: false,
        SOM: false,
        PI: false,
        AASU: false
    }

    handleOpenCloseThis = section => {
        let { UB, COL, FS, SOM, PI, AASU } = this.state

        if (section === "UB") {
            UB ? this.setState({ UB: false }) : this.setState({ UB: true })
        } else if (section === "COL") {
            COL ? this.setState({ COL: false }) : this.setState({ COL: true })
        } else if (section === "FS") {
            FS ? this.setState({ FS: false }) : this.setState({ FS: true })
        } else if (section === "SOM") {
            SOM ? this.setState({ SOM: false }) : this.setState({ SOM: true })
        } else if (section === "PI") {
            PI ? this.setState({ PI: false }) : this.setState({ PI: true })
        } else if (section === "AASU") {
            AASU ? this.setState({ AASU: false }) : this.setState({ AASU: true })
        }
    }

    handleOpenAll = () => {
        this.setState({UB: true,  COL: true, FS: true, SOM: true, PI: true, AASU: true})
    }

    handleCloseAll = () => {
        this.setState({UB: false,  COL: false, FS: false, SOM: false, PI: false, AASU: false})
    }

    render() {
        let { UB, COL, FS, SOM, PI, AASU } = this.state
        return (
            <Fragment>
                <div className="home-info">
                    <Block title="About" top={true}>
                        <p className="justify-txt">I am driven by the desire to succeed and am eager to apply my strong leadership experiences, and 
                        interpersonal skills to achieve this success. I always look forward to new experiences and further 
                        developing my technical and professional skills.</p>
                    </Block>

                    <Block title="Education">
                        <Sub 
                            title="University at Buffalo"
                            year="May 2012" 
                            location="Buffalo, New York"
                            position=""
                            openStat={UB}
                            name="UB"
                            func={this.handleOpenCloseThis}>
                            <p>Bachelor of Science in Business Administration</p>
                            <p>Concentration: Management Information Systems</p>
                            <p><span className="bolder">GPA: </span> 3.2/4.0</p>
                        </Sub>

                        <Sub 
                            title="Columbia University"
                            year="Dec 2018" 
                            location="New York, New York"
                            position=""
                            openStat={COL}
                            name="COL"
                            func={this.handleOpenCloseThis}>
                            <p>Columbia Engineering Coding Boot Camp</p>
                            <p>Full-Stack Developer Course</p>
                            <p><span className="bolder">Grade: </span>A</p>
                        </Sub>
                    </Block>

                    <Block title="Work Experiance">
                        <Sub 
                            title="FlightSafety International" 
                            year="July 2012 to Sept 2018" 
                            location="Flushing, New York"
                            position="Condition Contract Specialist"
                            openStat={FS}
                            name="FS"
                            func={this.handleOpenCloseThis}>
                            <ul className="sub-list">
                                <li>Point of contact for special condition pricing, issues with SAP CRM web interface system, special maintenance training invoicing, validity date adjustments and retail rate adjustments</li>
                                <li>Calculated, managed and corrected the retail rate database to assure that rates fall in line with the formula across the different pricing plans</li>
                                <li>Researched and controlled customer discount database to align with customer signed agreements and ensure incorrect rates are removed</li>
                                <li>Worked with SAP Logon 720 and SAP CRM for pricing approval requests, pricing entrees, sales orders, invoices, financial debits, debit memos, contracts and special pricing</li>
                            </ul>
                        </Sub>
                        <Sub 
                            title="School of Management Advisory Department" 
                            year="August 2009 to May 2012" 
                            location="Buffalo, New York "
                            position="Office Administrator Assistant"
                            openStat={SOM}
                            name="SOM"
                            func={this.handleOpenCloseThis}>
                            <ul className="sub-list">
                                <li>Managed office traffic and assisted the students with answering simple walk-in questions </li>
                                <li>Arrange an appointment with the advisor and prepared student portfolios for the meetings</li>
                                <li>Emailed follow up survey to students after their session with their advisor</li>
                                <li>Answered incoming calls and redirected them to proper authority</li>
                                <li>Input student information into Access database and Excel spreadsheets</li>
                            </ul>
                        </Sub>
                        <Sub 
                            title="Photography Island" 
                            colwidth={12} 
                            year="Summer of 2009 and 2010" 
                            location="Port Washington, New York"
                            position="Production Staff"
                            openStat={PI}
                            name="PI"
                            func={this.handleOpenCloseThis}>
                            <ul className="sub-list">
                                <li>Created demos portfolios for each client school </li>
                                <li>Worked with a program called CORE to sort and organize school graduation photos</li>
                                <li>Collected and logged contact information of student customers in to company database</li>
                            </ul>
                        </Sub>
                    </Block>

                    <Block title="Leadership">
                        <Sub 
                            title="Asian American Student Union" 
                            colwidth={6} 
                            year="August 2010 to July 2012" 
                            location="Buffalo, New York "
                            position="Treasurer & Senior Advisor"
                            openStat={AASU}
                            name="AASU"
                            func={this.handleOpenCloseThis}>
                            <ul className="sub-list">
                                <li>Prepare the club’s budgets, ensure that club activities stayed adhere to the budget and managed new fundraising event to increase club budget for future club leaders</li>
                                <li>Organized workshops to educate other about the Asian American community</li>
                                <li>Prepared paperwork for room reservation, purchase orders, line transfers, merchandise sales, ticketing events, performance preparations, etc.</li>
                                <li>Trained the new executive board and offered solutions when problems arise</li>
                            </ul>
                        </Sub>
                    </Block>
                </div>
                <img className="home-bg-img" src="https://lh3.googleusercontent.com/NnyvVqox0yg7XuIj7XHBcAwwH8oUTXPycaTUHWJLZHWynQDoWxFxMq8I6l43yxT7v8pvYa0_4JsaW8Or-9UBjNq4KKTS7IpftYURoX4YO2Z5uU8zN49LyhLWAodF3UOw7BsG5Y7wvxc7q93DJtfIXaiE1n1yXGi-kJRYWh8waTyzZkTxBdkcfgrZzgnfDymM_nkWn8Bg87Q3Ba6mFIIDYQwOvzOdDcCUlsmR86PFSEigenZi3cKN5dp-YvskeMYHc8K9ljAg1YtUt84D2tNqxvX_xTY4pnaUCYYBxS5MjifpQFBeQIQfpDBl9F47ah2ia5-CO7JSE4rwrUuzvJBFHmTDLpE-exvqag4Z3Kazdb3O53NcnWOlXWI7ziGN0W_y7pFW16_19BQXtm9NzFSnrLuqtpNxZoBd1MIdJVlU9GZ6VrNntIEuCXBPja05ZEVzVIX6RZfk2sMgbef2DhNi82-jIQvZlVRkk0iixC6FflR-Lbww-NPcy9suPeV-2eIdrjaE0U-6FFGokS4iFLh2Ogz--WLZZCTZEFAKfOonrspz6usqWk3iaT08vYkGM6DYGGAFk-C-IzN0X0HI-aWWuhtxBhXWmlN_xug-xdgvgzgot2k_AQ1p9eSLam9gHKvM8fH0tVlomlMrucPnvp9q7qA6nOeFRac=s1542-no" alt="lamp" />
                <div className="open-close-box">
                    <button className="open-close-btn" onClick={this.handleOpenAll}><i className="fas fa-caret-down"></i><span className="only-large"> Open All</span></button>
                    <button className="open-close-btn" onClick={this.handleCloseAll}><i className="fas fa-caret-up"></i><span className="only-large"> Close All</span></button>
                </div>
            </Fragment>
        );
    }
}