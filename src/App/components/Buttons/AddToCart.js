import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export class AddToCartButton extends Component {

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
