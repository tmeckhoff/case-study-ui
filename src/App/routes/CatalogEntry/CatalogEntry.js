import React, { Component } from 'react';
import './CatalogEntry.scss';
import Slider from '../../components/Slider';
import PropTypes from 'prop-types';
import { getAllCatalogItems } from '../../state/actions';
import { connect } from 'react-redux';
import AddToCartButton from '../../components/Buttons/AddToCart';
import PickUpInStoreButton from '../../components/Buttons/PickUpInStore';
import { Grid, Col } from 'react-flexbox-grid';


const mapStateToProps = (state) => {
   return {
      items: state.items
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getItemsData: items => dispatch(getAllCatalogItems())
   }
};

export class CatalogEntry extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemsJson: this.props.items.CatalogEntryView[0]
        }
    }

    componentWillMount(){
        this.props.getItemsData();
    }

render(){

let title = this.state.itemsJson.title;
let images = this.state.itemsJson.Images[0].AlternateImages;
let price = this.state.itemsJson.Offers[0].OfferPrice[0].formattedPriceValue;
let purchaseCode = this.state.itemsJson.purchasingChannelCode;

let addToCartButton = null;
let pickUpButton = null;

    if (purchaseCode === '0') {
      addToCartButton = <AddToCartButton />;
      pickUpButton = <PickUpInStoreButton />;
    }
    else if(purchaseCode === '1'){
      addToCartButton = <AddToCartButton />;
    } else if(purchaseCode === '2'){
      pickUpButton = <PickUpInStoreButton />;
    }

   return (
    <Grid fluid>
    <div>
    <h2 id="title">{title}</h2>
    <Col xs={9} md={3}>
      <h3 id="price">{price}</h3>
        {pickUpButton}
         {addToCartButton}
      </Col>
        <Col xs={9} md={3}>
        <Slider images={images} />
        </Col>
    </div>
    </Grid>
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
