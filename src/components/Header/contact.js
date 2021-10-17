import React from 'react';
export default class Contacts extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h5>{this.props.info}</h5>
                <br/>
            </div>
        )
    }
}