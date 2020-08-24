import React, { Component } from 'react'
import SearchTop from '../components/SearchTop';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Toggle from '../components/Toggle';

export default class ClientExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
                clientList: [],
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

        fetch(this.state.server+"/clients", requestOptions)
        .then(res => res.json())
        .then(res => {
            if (res.status == 401 || res.status == 403) {
                localStorage.removeItem("userData");
                window.location = "/";
            }else {
                this.setState({clientList: res});
            }
        });
    }

    
    render() {
        const toggleSubtable = (element) => {
            this.setState({activeSubtable: element});
        }

        const updateStatus = (userId, userActive) => {
            const userData = JSON.parse(localStorage.getItem("userData"));

            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'x-access-token': "ottiffa "+userData.accessToken
                },
                body: JSON.stringify({id: userId, active: userActive})
            };
    
            fetch(this.state.server+"/changeStatus", requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.status == 401 || res.status == 403) {
                    localStorage.removeItem("userData");
                    window.location = "/";
                }else {
                    this.setState({clientList: res});
                }
            });
    
        }

        return (
            <>
                <SearchTop color="green" title="Client Explorer" href="/menu" />
                
                <div className="affitto-new-table">
                    <Row className="affitto-table-header-container">
                        <Col md={2} lg={2} sm={1} xs={1}></Col>
                        <Col md={9} lg={9} sm={9} xs={9}>
                            <Row className="affitto-table-header">
                                <Col className="text-left">Brand</Col>
                                <Col className="text-left">Email Contact</Col>
                                <Col className="text-center">Personal Info</Col>
                                <Col className="text-center">Bank Info</Col>
                                <Col className="text-center">Product List</Col>
                                <Col className="text-center">Active Status</Col>
                            </Row>
                        </Col>
                    </Row>
                    {this.state.clientList.map((row, i) =>
                        <div className="affitto-table-row">
                        <Row className="affitto-table-row-container">
                            <Col md={2} lg={2} sm={1} xs={1}></Col>
                            <Col md={9} lg={9} sm={9} xs={9}>
                                <Row>
                                    <Col className="text-left">{row.brand_name_dba}</Col>
                                    <Col className="text-left">{row.business_owner_email}</Col>
                                    <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("personalInfo"+i)}}>View</a></Col>
                                    <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("bankInfo"+i)}}>View</a></Col>
                                    <Col className="text-center"><a href="javascript: void(0);" onClick={() => {toggleSubtable("productList"+i)}}>View</a></Col>
                                    <Col className="text-center">{(row.active == 1)?"Active":"Inactive"} (<a href="javascript: void(0);" onClick={() => {updateStatus(row.user_id, (row.active == 1)?0:1);}}>{(row.active == 1)?"Deactivate":"Activate"}</a>)</Col>
                                </Row>
                            </Col>  
                        </Row>

                        <div className={"sub-table-container " + ((this.state.activeSubtable == "personalInfo"+i)?"":"hide")}>
                            <Row>
                                <Col md={12} lg={12} sm={12} xs={12}>
                                    <Row>
                                        <Col md={2} lg={2} sm={1} xs={1}></Col>
                                        <Col md={9} lg={9} sm={9} xs={9}>
                                            <table className="affitto-table">
                                                <tr>
                                                    <th className="text-left">Website</th>
                                                    <th className="text-left">Tax ID</th>
                                                    <th className="text-center">Tax CLassification</th>
                                                    <th className="text-center">Business Address</th>
                                                    <th className="text-center">Contact Person</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-left">{row.online_store_website}</td>
                                                    <td className="text-left">{row.tax_identification_number}</td>
                                                    <td className="text-center">{row.federal_tax_classification}</td>
                                                    <td className="text-center">{row.street_number_street_address}</td>
                                                    <td className="text-center">{row.account_holders_name}</td>
                                                </tr>
                                            </table>
                                        </Col> 
                                    </Row>
                                </Col>  
                            </Row>
                        </div>

                        <div className={"sub-table-container " + ((this.state.activeSubtable == "bankInfo"+i)?"":"hide")}>
                            <Row>
                                <Col md={12} lg={12} sm={12} xs={12}>
                                    <Row>
                                        <Col md={6} lg={6} sm={5} xs={5}></Col>
                                        <Col md={5} lg={5} sm={5} xs={5}>
                                            <table className="affitto-table">
                                                <tr>
                                                    <th className="text-left">Name</th>
                                                    <th className="text-left">Account Number</th>
                                                    <th className="text-center">Transit Number</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-left">{row.account_holders_name}</td>
                                                    <td className="text-left">{row.account_number}</td>
                                                    <td className="text-center">{row.transit_number}</td>
                                                </tr>
                                            </table>
                                        </Col> 
                                    </Row>
                                </Col>  
                            </Row>
                        </div>

                        <div className={"sub-table-container " + ((this.state.activeSubtable == "productList"+i)?"":"hide")}>
                            <Row>
                                <Col md={12} lg={12} sm={12} xs={12}>
                                    <Row>
                                        <Col md={2} lg={2} sm={1} xs={1}></Col>
                                        <Col md={9} lg={9} sm={9} xs={9}>
                                            <table className="affitto-table">
                                                <tr>
                                                    <th className="text-left"></th>
                                                    <th className="text-center">SKU Number</th>
                                                    <th className="text-center">Category</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Rental Price</th>
                                                    <th className="text-center">Rental Duration</th>
                                                </tr>
                                                {row.products.map((prod, j) =>
                                                <tr>
                                                    <td className="text-left"><img width="70" src={prod.image} /></td>
                                                    <td className="text-center">{prod.sku}</td>
                                                    <td className="text-center">{prod.category}</td>
                                                    <td className="text-center">{prod.price}</td>
                                                    <td className="text-center">{((prod.rental_price != null)?"$"+prod.rental_price:"")}<br />{((prod.rental_price2 != null)?"$"+prod.rental_price2:"")}<br />{((prod.rental_price3 != null)?"$"+prod.rental_price3:"")}</td>
                                                    <td className="text-center">{((prod.rental_period != null)?prod.rental_period+" days":"")}<br />{((prod.rental_period2 != null)?prod.rental_period2+" days":"")}<br />{((prod.rental_period3 != null)?prod.rental_period3+" days":"")}</td>
                                                </tr>
                                                )}
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
                    )}
                </div>
                <div className="padding-20"></div>    
            </>
        )
    }
}