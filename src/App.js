import './App.scss';

import Carousel from './components/Carousel';
import Header from './components/Header/Header';
import TextBlock from './components/TextBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='content'>
        <TextBlock />
        <Carousel />
      </section>
    </div>
  );
}

export default App;
