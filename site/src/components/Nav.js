import React, { Component } from 'react';
import '../css/components/Nav.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
 
class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const logout = () => {
            localStorage.removeItem("userData");
            window.location = "/login";
        }

        const renderAuthButton = () => {
            if(this.props.userName != ""){
              return <span>
                        {this.props.userName}<br />
                        <a onClick={logout} href="javascript: void(0);">
                            Logout
                        </a>
                    </span>
            }
        }
        
        return <div className="topCompensation">
                    <nav className='navStyle'>
                        <Container>
                            <Row className="menuRow">
                                <Col md={2} lg={2} sm={3} xs={3} className="logo">
                                    <img className='logo' alt="Affitto Logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                                </Col>
                                <Col md={5} lg={5} sm={5} xs={5} className='navItems align-middle'>
                                    Demo
                                </Col>
                                <Col md={5} lg={5} sm={4} xs={4} className="loginDisplayContainer">
                                    {renderAuthButton()}
                                </Col>
                            </Row>
                        </Container>
                    </nav>
                </div>;
    }
}

export default Nav;