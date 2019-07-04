import React from 'react';
import './Banner.css';
import Slider from 'react-slick';


/*const Banner = () => {
    return(
        <div className="container">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="img-res" alt="not found" />
        </div>
    )
}*/

export default class Banner extends React.Component{
    render(){
        return(
            <div className="container">
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                >

                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="img-res" alt="not found" />
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="img-res" alt="not found" />
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="img-res" alt="not found" />
                    
                </Slider>
            </div>
        );
    }
}