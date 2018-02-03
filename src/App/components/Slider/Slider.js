import React, { Component } from 'react';
import classes from './Slider.scss';
import Slider from 'react-slick';

class SliderComponent extends Component {
	 constructor(props){
    super(props);
    this.state = { 
        imagesArray: this.props.images
    };
  }

render(){
   let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    };
   return (<Slider {...settings} >
               {this.state.imagesArray.map((image, index) => (
                <div key={index}>
                    <img  src={image.image} />
                </div>
                ))} 
            </Slider>
    
        );

}

}

export default SliderComponent;
