import React, { Component } from 'react'
import MenuItem from '../components/MenuItem';

export default class Menu extends Component {
    render() {
        return (
            <>
                <MenuItem title="Client Explorer" color="green" href="/clientExplorer" />
                <MenuItem title="Rental Order Explorer" color="pink" href="/orderExplorer" />
            </>
        )
    }
}
