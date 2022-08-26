import './Header.scss';

import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { ReactComponent as Calendar } from '../../assets/Calendar.svg'
import { ReactComponent as Menu } from '../../assets/Menu.svg'
import { ReactComponent as Map } from '../../assets/Map.svg'
import { ReactComponent as Search } from '../../assets/Search.svg'
import { ReactComponent as Chevron } from '../../assets/Chevron.svg'
import { ReactComponent as Burger } from '../../assets/Burger.svg'

import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header'>
          <div className='main'>
            <div className='logo-container'>
              <Logo className='logo'/>
            </div>
            <div className='menu-mobile'>
              <Search />
              <Burger />
            </div>
            <div className='menu'>
              <a href="/">About</a>
              <a href="/">Menu</a>
              <a href="/">Gallery</a>
              <a href="/">Contact</a>
              <a href="/">Gift Cards</a>
              <a href="/"><Search className='menu-icon'/></a>
            </div>
          </div>
          <div className='secondary'>
            <a href="/" className='menu-time'>
              <div className='label'>Open Today</div>
              <div className='value'>4pm - 6:30pm<Chevron className='chevron' /></div>
            </a>
            <div className='icon-links'>
              <HeaderIcon title={'Visit'} icon={<Map />}/>
              <HeaderIcon title={'Menu'} icon={<Menu />}/>
              <HeaderIcon title={'Book'} icon={<Calendar />}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
