import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class PickUpInStoreButton extends Component {
	 constructor(props){
    super(props);
   this.state = { 
    
    };
  }

render(){

    let style = {
      marginRight: "5px",
      marginBottom: "15px"
  };
  
   return (<RaisedButton backgroundColor="#000000" labelColor="white" style={style} label="PICK UP IN STORE" />
    
        );

}

}

export default PickUpInStoreButton;