import './TextBlock.scss';

import { ReactComponent as ChevronGreen } from '../assets/ChevronGreen.svg'
import { ReactComponent as Capsicum } from '../assets/Capsicum.svg'

import CarouselNav from './CarouselNav';

function TextBlock() {
  return (
    <div className="text-block">
      <p className='subheader'>Unique Elegance</p>
      <h1>Experience the finest farm-to-table in Newcastle</h1>
      <p>Enjoy the exclusive waterfront views, and delicious meals designed to bring the best from each season.</p>
      <a href="/">Find out more<ChevronGreen className='icon' /></a>
      <Capsicum className='background-img' />
      <CarouselNav c="mobile-hide"/>
    </div>
  );
}

export default TextBlock;
