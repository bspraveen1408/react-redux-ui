
import React, { Component } from 'react';
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

            </div>
        )
    }
}
export default Header