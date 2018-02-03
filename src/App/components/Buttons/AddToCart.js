import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AddToCartButton extends Component {
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

   return (<RaisedButton backgroundColor="#cc0000" labelColor="white" className="addToCart" style={style} label="ADD TO CART" />
    
        );

}

}

export default AddToCartButton;
