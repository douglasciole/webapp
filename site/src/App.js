import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/App.css';

import Nav from "./components/Nav"
import Footer from "./components/Footer"

import SignupPage from './pages/Signup'
import LoginPage from './pages/Login';
import MenuPage from './pages/Menu';
import ClientsPage from './pages/Clients';
import DonePage from './pages/Done';
import ClientExplorer from './pages/ClientExplorer';
import OrderExplorer from './pages/OrderExplorer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      userName: ''
    };

  }

  componentWillMount() {
    // fetch("http://localhost:9000/api")
    // .then(res => res.text())
    // .then(res => this.setState({apiReturn: res}))

    localStorage.getItem("userData") && this.setState({
      userData: JSON.parse(localStorage.getItem("userData"))
    })
  }

  render(){
    let userName = "";
    const serverAddress = "http://api.douglasciole.com:9999";
    const serverAuth = "http://api.douglasciole.com:9999";

    if (this.state.userData != null && this.state.userData.accessToken != null) {
      userName = this.state.userData.userName;
    }
    
    return (
      <div className="App">
        <Nav uri={window.location.pathname.toString()} userName={userName} />
        <Router>
          <Switch>
            <Route path="/" exact component={() => <LoginPage authServer={serverAuth} />} />
            <Route path="/login" component={() => <LoginPage authServer={serverAuth} />} />
            <Route path="/signup" component={() => <SignupPage server={serverAddress} />} />
              {this.state.userData != null && <Route path="/menu" component={MenuPage} /> }
              {this.state.userData != null && <Route path="/clientExplorer" component={() => <ClientExplorer server={serverAddress} />} />}
              {this.state.userData != null && <Route path="/orderExplorer" component={() => <OrderExplorer server={serverAddress} />} />}
              {this.state.userData != null && <Route path="/clients" component={ClientsPage} />}
              <Route path="/done" component={DonePage} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
