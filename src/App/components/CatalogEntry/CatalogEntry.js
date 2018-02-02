import React, { Component } from 'react';
import classes from './CatalogEntry.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from '../Slider/Slider';
import PropTypes from 'prop-types';
import { getAllCatalogItems } from '../state/actions';
import { connect } from 'react-redux';
import items from './item-data.json';

const mapStateToProps = state => ({
    itemsArray: state.itemsReducer[0]
});

const mapDispatchToProps = dispatch => ({
    getItemsData: dispatch(getAllCatalogItems())
});

class CatalogEntry extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemsArray: items.CatalogEntryView[0]
        }
    }

render(){
console.log(JSON.stringify(this.props));
    console.log("items " + JSON.stringify(this.props.itemsArray));
   return (
    <div><Slider images={this.state.itemsArray.Images[0].AlternateImages} /></div>
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
