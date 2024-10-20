import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nursery from '../../products/nursery'
import './index.css'

const Nursery = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3
  };
  const smallSettings  = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <div className="slider-container">
      <p className="intro">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
      </p>
     <h1 className="nursery-head">Nursery</h1>
      <Slider {...settings} className="large-slide">
        {nursery.map((product) => (
          <div key={product.id} className="nursery-slide">
            <img
              src={product.image}
              alt={product.id}
              className="nursery-image"
            />
            <p className="nursery-title"> Lorem ipsum dolor sit amet. Aut ipsam illucessitatibus</p>
          </div>
        ))}
      </Slider>
      <Slider {...smallSettings} className="small-slide">
        {nursery.map((product) => (
          <div key={product.id} className="nursery-slide">
            <img
              src={product.image}
              alt={product.id}
              className="nursery-image"
            />
            <p className="nursery-title"> Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Nursery;
