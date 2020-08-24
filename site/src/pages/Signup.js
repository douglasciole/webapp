import React, { Component } from 'react'
//import Carousel from 'react-bootstrap/Carousel'

import AccountInfos from './AccountInfos'
import FirstPage from './First'
import SecondPage from './Second'
import ThirdPage from './Third'
import FourthPage from './Fourth'
import FifthPage from './Fifth'
import SixthPage from './Sixth'
import ConfirmationPage from './Confirmation'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            server: props.server
        };
    }

    navegatePage = (pageNumber) => {
        this.setState({currentPage: pageNumber});
        window.scrollTo(0, 0);
    }

    getStateValue = (stateName) => {
        return this.state[stateName]
    }

    setStateValue = (stateName, value) => {
        this.setState({ [stateName]: value });
    }

    render() {
        return <>
                    <div className={this.state.currentPage != 0 ? 'hide-page' : ''}>
                        <AccountInfos btnNext={this.navegatePage.bind(this, 1)} />
                    </div>
                    <div className={this.state.currentPage != 1 ? 'hide-page' : ''}>
                        <FirstPage btnNext={this.navegatePage.bind(this, 2)} btnPrev={this.navegatePage.bind(this, 0)}/>
                    </div>
                    <div className={this.state.currentPage != 2 ? 'hide-page' : ''}>
                        <SecondPage btnNext={this.navegatePage.bind(this, 3)} btnPrev={this.navegatePage.bind(this, 1)}/>
                    </div>
                    <div className={this.state.currentPage != 3 ? 'hide-page' : ''}>
                        <ThirdPage btnNext={this.navegatePage.bind(this, 4)} btnPrev={this.navegatePage.bind(this, 2)}/>
                    </div>
                    <div className={this.state.currentPage != 4 ? 'hide-page' : ''}>
                        <FourthPage btnNext={this.navegatePage.bind(this, 5)} btnPrev={this.navegatePage.bind(this, 3)}/>
                    </div>
                    <div className={this.state.currentPage != 5 ? 'hide-page' : ''}>
                        <FifthPage btnNext={this.navegatePage.bind(this, 6)} btnPrev={this.navegatePage.bind(this, 4)}/>
                    </div>
                    <div className={this.state.currentPage != 6 ? 'hide-page' : ''}>
                        <SixthPage btnNext={this.navegatePage.bind(this, 7)} btnPrev={this.navegatePage.bind(this, 5)}/>
                    </div>
                    <div className={this.state.currentPage != 7 ? 'hide-page' : ''}>
                        <ConfirmationPage server={this.state.server} navPage={this.navegatePage} getStateValue={this.stateNameValue} btnNext={this.navegatePage.bind(this, 8)} btnPrev={this.navegatePage.bind(this, 6)}/>
                    </div>
                </>;
    }
}

export default Signup;

{/* <Carousel interval={null} touch={false} controls={true}>
    <Carousel.Item>
        <FirstPage />
    </Carousel.Item>

    <Carousel.Item>
        <SecondPage />
    </Carousel.Item>
</Carousel> */}
