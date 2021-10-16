import React from 'react';
class About extends React.Component{
    constructor(props) {
        super(props)
        this.state={

        }

    }
    render(){
        return(
            <div>{this.props.details}</div>
        )
    }
}
export default About;