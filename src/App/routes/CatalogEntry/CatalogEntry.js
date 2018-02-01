import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    catalogEntryView: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    catalogEntryView : state.catalogEntryViewItems
  }
}

const CatalogEntry = ({catalogEntryView}) => {
    console.log("here is dat " + JSON.stringify(catalogEntryView));
    return (
        <div></div>);
};

export default connect(mapStateToProps)(CatalogEntry);
