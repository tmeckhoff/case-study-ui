import React, { Component } from 'react';
import classes from './CatalogEntry.scss';
import Slider from '../Slider';
import PropTypes from 'prop-types';
import { getAllCatalogItems } from '../../state/actions';
import { connect } from 'react-redux';
import itemsData from './item-data.json';
import AddToCartButton from '../Buttons/AddToCart';
import PickUpInStoreButton from '../Buttons/PickUpInStore';

const mapStateToProps = (state) => {
   return {
      items: state.itemsReducer[0]
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getItemsData: items => dispatch(getAllCatalogItems())
   }
};

class CatalogEntry extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemsJson: itemsData.CatalogEntryView[0]
        }
    }

    componentWillMount(){
        this.props.getItemsData();
    }

render(){

console.log("items from redux " + JSON.stringify(this.props.items));
let title = this.state.itemsJson.title;
let images = this.state.itemsJson.Images[0].AlternateImages;
let price = this.state.itemsJson.Offers[0].OfferPrice[0].formattedPriceValue;
let purchaseCode = this.state.itemsJson.purchasingChannelCode;

  let addToCartButton = null;
  let pickUpButton = null;

    if (purchaseCode == '0') {
      addToCartButton = <AddToCartButton />;
      pickUpButton = <PickUpInStoreButton />;
    }
    else if(purchaseCode == '1'){
      addToCartButton = <AddToCartButton />;
    } else if(purchaseCode == '2'){
      pickUpButton = <PickUpInStoreButton />;
    }

   return (
    <div>
    <h2>{title}</h2>
    <h3>{price}</h3>
    <Slider images={images} />
    {addToCartButton}
    {pickUpButton}
    </div>
        );

}

}

CatalogEntry.propTypes = {
  items: PropTypes.object,
  getItemsData: PropTypes.func
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(CatalogEntry);
