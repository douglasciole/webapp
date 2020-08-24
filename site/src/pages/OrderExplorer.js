import React, { Component } from 'react'
import SearchTop from '../components/SearchTop';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav'

import Toggle from '../components/Toggle';

export default class OrderExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseList: [],
            activeSubtable: "",
            server: props.server
        };
    
    }

    componentWillMount() {
        const userData = JSON.parse(localStorage.getItem("userData"));

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': "ottiffa "+userData.accessToken
            },
            body: JSON.stringify({})
        };

        fetch(this.state.server+"/purchases", requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log(res);

            if (res.status == 401 || res.status == 403) {
                localStorage.removeItem("userData");
                window.location = "/";
            }else {
                this.setState({purchaseList: res});
            }
        });
    }

    render() {
        const toggleSubtable = (element) => {
            this.setState({activeSubtable: element});
        }

        const updateStatus = (userId, companyId, userActive) => {
            const userData = JSON.parse(localStorage.getItem("userData"));

            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-access-token': "ottiffa "+userData.accessToken
                },
                body: JSON.stringify({id: userId, company_id: companyId, active: userActive})
            };
    
            fetch(this.state.server+"/changePurchaseShiping", requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.status == 401 || res.status == 403) {
                    localStorage.removeItem("userData");
                    window.location = "/";
                }else {
                    this.setState({purchaseList: res});
                }
            });
    
        }

        return (
            <>
                <SearchTop color="pink" title="Rental Order Explorer" href="/menu" />
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="flex-column">
                        <Row>
                            <Col sm={6}>
                                <span className="green">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">New Order</Nav.Link>
                                    </Nav.Item>
                                </span>
                            </Col>
                            <Col sm={6}>
                                <span className="green">
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Past Order</Nav.Link>
                                    </Nav.Item>
                                </span>
                            </Col>
                        </Row>
                    </Nav>

                    <Row>
                        <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">

                                <div className="affitto-new-table">
                                    <Row className="affitto-table-header-container">
                                        <Col md={2} lg={2} sm={1} xs={1}></Col>
                                        <Col md={9} lg={9} sm={9} xs={9}>
                                            <Row className="affitto-table-header">
                                                <Col className="text-left">Name</Col>
                                                <Col className="text-left">Brand</Col>
                                                <Col className="text-left">Delivery Address</Col>
                                                <Col className="text-center">Personal Info</Col>
                                                <Col className="text-center">Rental Info</Col>
                                                <Col className="text-center">Status</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    {this.state.purchaseList.map((row, i) => 
                                        (row.shiped != 1)?
                                                <div className="affitto-table-row">
                                                <Row className="affitto-table-row-container">
                                                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                                                    <Col md={9} lg={9} sm={9} xs={9}>
                                                        <Row>
                                                            <Col className="text-left">{row.customer_name}</Col>
                                                            <Col className="text-left">{row.brand_name_dba}</Col>
                                                            <Col className="text-left">{row.address}</Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("personalInfo"+i)}}>View</a></Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("rentalInfo"+i)}}>View</a></Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("status"+i)}}>View</a></Col>
                                                        </Row>
                                                    </Col>  
                                                </Row>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "personalInfo"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={6} lg={6} sm={5} xs={5}></Col>
                                                                <Col md={5} lg={5} sm={5} xs={5}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-left">Delivery Method</th>
                                                                            <th className="text-left">Email Address</th>
                                                                            <th className="text-center">Phone Number</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-left">{row.delivery_method}</td>
                                                                            <td className="text-left">{row.email}</td>
                                                                            <td className="text-center">{row.phone}</td>
                                                                        </tr>
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "rentalInfo"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={3} lg={3} sm={3} xs={3}></Col>
                                                                <Col md={8} lg={8} sm={8} xs={8}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-left">Product SKU</th>
                                                                            <th className="text-left">Quantity</th>
                                                                            <th className="text-center">Color</th>
                                                                            <th className="text-center">Size</th>
                                                                            <th className="text-center">Rental Duration</th>
                                                                            <th className="text-center">Rental Price</th>
                                                                        </tr>
                                                                        {row.products.map((row2, i2) =>
                                                                        <tr>
                                                                            <td className="text-left">{row2.sku}</td>
                                                                            <td className="text-left">{row2.quantity}</td>
                                                                            <td className="text-center">{row2.color}</td>
                                                                            <td className="text-center">{row2.size}</td>
                                                                            <td className="text-center">{row2.duration} days</td>
                                                                            <td className="text-center">${row2.price}</td>
                                                                        </tr>
                                                                        )}
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "status"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={6} lg={6} sm={5} xs={5}></Col>
                                                                <Col md={5} lg={5} sm={5} xs={5}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-center">Tracking Number</th>
                                                                            <th className="text-center">Shipping Status</th>
                                                                            <th className="text-center">Rental Status</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">{row.tracking_code}</td>
                                                                            <td className="text-center">{(row.tracking_code == "")?"Not Shipped":"Shipped"}</td>
                                                                            <td className="text-center">{(row.shiped == 1)?"Active":"Active"} (<a href="javascript: void(0);" onClick={() => {updateStatus(row.id, row.company_id, (row.shiped == 1)?0:1);}}>{(row.shiped == 1)?"Return":"Return"}</a>)</td>
                                                                        </tr>
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <Row>
                                                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                                                    <Col md={9} lg={9} sm={9} xs={9}>
                                                        <Row className="affitto-table-row-underline"></Row>
                                                    </Col>  
                                                </Row>
                                            </div>
                                        :<></>
                                    )}
                                </div>
                                <div className="padding-20"></div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                
                            <div className="affitto-new-table">
                                    <Row className="affitto-table-header-container">
                                        <Col md={2} lg={2} sm={1} xs={1}></Col>
                                        <Col md={9} lg={9} sm={9} xs={9}>
                                            <Row className="affitto-table-header">
                                                <Col className="text-left">Name</Col>
                                                <Col className="text-left">Brand</Col>
                                                <Col className="text-left">Delivery Address</Col>
                                                <Col className="text-center">Personal Info</Col>
                                                <Col className="text-center">Rental Info</Col>
                                                <Col className="text-center">Status</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    {this.state.purchaseList.map((row, i) => 
                                        (row.shiped == 1)?
                                                <div className="affitto-table-row">
                                                <Row className="affitto-table-row-container">
                                                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                                                    <Col md={9} lg={9} sm={9} xs={9}>
                                                        <Row>
                                                            <Col className="text-left">{row.customer_name}</Col>
                                                            <Col className="text-left">{row.brand_name_dba}</Col>
                                                            <Col className="text-left">{row.address}</Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("personalInfo"+i)}}>View</a></Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("rentalInfo"+i)}}>View</a></Col>
                                                            <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("status"+i)}}>View</a></Col>
                                                        </Row>
                                                    </Col>  
                                                </Row>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "personalInfo"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={6} lg={6} sm={5} xs={5}></Col>
                                                                <Col md={5} lg={5} sm={5} xs={5}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-left">Delivery Method</th>
                                                                            <th className="text-left">Email Address</th>
                                                                            <th className="text-center">Phone Number</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-left">{row.delivery_method}</td>
                                                                            <td className="text-left">{row.email}</td>
                                                                            <td className="text-center">{row.phone}</td>
                                                                        </tr>
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "rentalInfo"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={3} lg={3} sm={3} xs={3}></Col>
                                                                <Col md={8} lg={8} sm={8} xs={8}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-left">Product SKU</th>
                                                                            <th className="text-left">Quantity</th>
                                                                            <th className="text-center">Color</th>
                                                                            <th className="text-center">Size</th>
                                                                            <th className="text-center">Rental Duration</th>
                                                                            <th className="text-center">Rental Price</th>
                                                                        </tr>
                                                                        {row.products.map((row2, i2) =>
                                                                        <tr>
                                                                            <td className="text-left">{row2.sku}</td>
                                                                            <td className="text-left">{row2.quantity}</td>
                                                                            <td className="text-center">{row2.color}</td>
                                                                            <td className="text-center">{row2.size}</td>
                                                                            <td className="text-center">{row2.duration} days</td>
                                                                            <td className="text-center">${row2.price}</td>
                                                                        </tr>
                                                                        )}
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <div className={"sub-table-container " + ((this.state.activeSubtable == "status"+i)?"":"hide")}>
                                                    <Row>
                                                        <Col md={12} lg={12} sm={12} xs={12}>
                                                            <Row>
                                                                <Col md={6} lg={6} sm={5} xs={5}></Col>
                                                                <Col md={5} lg={5} sm={5} xs={5}>
                                                                    <table className="affitto-table">
                                                                        <tr>
                                                                            <th className="text-center">Tracking Number</th>
                                                                            <th className="text-center">Shipping Status</th>
                                                                            <th className="text-center">Rental Status</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">{row.tracking_code}</td>
                                                                            <td className="text-center">{(row.tracking_code == "")?"Not Shipped":"Shipped"}</td>
                                                                            <td className="text-center">{(row.shiped == 1)?"Returned":"Return"}</td>
                                                                        </tr>
                                                                    </table>
                                                                </Col> 
                                                            </Row>
                                                        </Col>  
                                                    </Row>
                                                </div>

                                                <Row>
                                                    <Col md={2} lg={2} sm={1} xs={1}></Col>
                                                    <Col md={9} lg={9} sm={9} xs={9}>
                                                        <Row className="affitto-table-row-underline"></Row>
                                                    </Col>  
                                                </Row>
                                            </div>
                                        :<></>
                                    )}
                                </div>
                                <div className="padding-20"></div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </>
        )
    }
}