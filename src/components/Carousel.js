import './Carousel.scss';

import HeroImage from '../assets/Hero Image.jpg';

import CarouselNav from './CarouselNav';

function Carousel() {
  return (
    <div className="carousel">
      <img src={HeroImage} alt='' />
      <CarouselNav c={"desktop-hide"}/>
    </div>
  );
}

export default Carousel;
