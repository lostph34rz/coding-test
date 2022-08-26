import './CarouselNav.scss';

import {ReactComponent as ArrowLeft} from '../assets/ArrowLeft.svg';
import {ReactComponent as ArrowRight} from '../assets/ArrowRight.svg';

function CarouselNav({c}) {
  return (
    <div className={`carousel-nav ${c}`}>
      <a href="/#" className='arrow'><ArrowLeft /></a>
      <hr></hr>
      <a href="/#" className='arrow'><ArrowRight /></a>
    </div>
  );
}

export default CarouselNav;
