import React, { Component, Fragment  } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './component/Container'
import Nav from './component/Nav'
import './App.css';

class App extends Component {
    state = {
        page: "projects"
    }

    changepage = page => {
        this.setState({ page })
    }

    render() {
        let { page } = this.state
        return (
            <Fragment>
                <Nav currentPage={page} changePageFunc={this.changepage} />
                    <Router>
                        <Switch>
                            <Route render={() => <Container page={page}/> } />
                        </Switch>
                    </Router>
            </Fragment>
        );
    }
}

export default App;