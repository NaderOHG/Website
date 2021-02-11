  
import React, {Component} from 'react';

class emailButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        window.location.href = `mailto:info@nader-recycling.de`;
    }
    render() {
        
        return <button className='mailbutton' onClick={this.onClick}>info@nader-recycling.de</button>;
     
    }
}


export default emailButton