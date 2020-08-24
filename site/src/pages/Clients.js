import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {clientList: []};
    
    }

    componentWillMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };

        fetch("http://localhost:9000/api/clients", requestOptions)
        .then(res => res.json())
        .then(res => {
            this.setState({clientList: res});
        });
    }

    render() {

        const updateStatus = (userId, userActive) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: userId, active: userActive})
            };
    
            fetch("http://localhost:9000/api/changeStatus", requestOptions)
            .then(res => res.json())
            .then(res => {
                this.setState({clientList: res});
            });
    
        }

        return (
            <>
                <h1>
                    Clients List
                </h1>

                <Container>
                    <Row className="menuRow">
                        <Col md={{ span: 10, offset: 2 }} lg={{ span: 10, offset: 2 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }}>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>E-Mail</th>
                                    <th>Active</th>
                                </tr>

                                {this.state.clientList.map((row, i) =>
                                    <tr key={i}>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{(row.active == 1)?"Active":"Inactive"} (<a href="javascript: void(0);" onClick={() => {updateStatus(row.id, (row.active == 1)?0:1);}}>{(row.active == 1)?"Deactivate":"Activate"}</a>)</td>
                                    </tr>
                                )}
                            </table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
