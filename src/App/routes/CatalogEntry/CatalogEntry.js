import React, { Component } from 'react';
var items = require('./item-data.json');


class CatalogEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: items
        };

        console.log("here is data " + JSON.stringify(this.state.items.CatalogEntryView[0].CustomerReview[0]));
    }



    render() {
        return (
            <div> Catalog
            </div>
);

    }
}

export default CatalogEntry;