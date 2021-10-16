
import React, { Component } from 'react';
import About from './about'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Header</h2>
                <marquee width="60%" direction="left" height="100px">
                    WELCOME! HAVE A WONDERFUL TOUR
                </marquee>
                <About details='this page is not yet ready'/>

            </div>
        )
    }
}
export default Header