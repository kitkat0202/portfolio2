import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './component/Container'
import Nav from './component/Nav'
import './App.css';

class App extends Component {
    state = {
        page: "home"
    }

    componentDidMount() {
        let { pathname } = window.location
        pathname === '/portfolio' ? this.setState({page: "portfolio"}) : 
        pathname === '/contact' ? this.setState({page: "contact"}) :
        pathname === '/home' || pathname === '/' ? this.setState({page: "home"}) : this.setState({page: "404"})
        
    }

    changepage = page => {
        this.setState({ page })
    }

    render() {
        let { page } = this.state
        return (
            <div className="contain">
                <Nav currentPage={page} changePageFunc={this.changepage} />
                <Router>
                    <Switch>
                        <Route render={() => <Container page={page}/> } />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;