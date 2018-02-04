This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Instructions for how to run the application

npm install, then:

`npm start` or `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### An overview of the case study

Framework

I chose to use React + Redux for this code challenge, as React is the UI framework I'm most familiar and comfortable with. I am familiar with using Redux in preexisting applications but this was my first time implementing it from scratch. Redux is maybe a bit overkill for a local json file but I wanted to challenge myself. I was able to access the local items-data.json file from the state but was having issues with the props.items being undefined in the CatalogEntry component on initial load. I was unable to resolve this in a timely fashion, so I also directly imported the local json file in the component. I kept the Redux implementation and added a console.log to illustrate that it is working.

Design

Per the instructions, this UI has a carousel to scroll through the item images, and displays the item title, price and "pick up in store" and "add to cart" buttons.

Tests

In the App.test.js file you will find tests for the App, Slider and CatalogEntry components. After running npm install, the tests can be run with `npm test` or `npm test a`.

Deploying code to live environment

For deploying a UI application to a live environment, one approach I'm most familiar with is serverless-UI using AWS S3 and Cloudfront. I have provided a diagram of that pipeline design in delivery-diagram.png.
