
import React,{Component} from 'react';
import {Copyright} from '@mui/icons-material/';
import './footer.css'
class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
        
        }
      }
    render(){
        return(
            <div className='footer'><Copyright/> All Rights Reserved</div>
        )
    }
}
export default Footer