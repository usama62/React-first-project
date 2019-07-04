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
                <img src="https://letzgro.net/wp-content/uploads/2015/12/banners%D1%83%D1%83.png" className="img-res" alt="not found" />
                <img src="https://etgeekera.files.wordpress.com/2016/01/react-world-banner.jpg" className="img-res" alt="not found" />
                    
                </Slider>
            </div>
        );
    }
}