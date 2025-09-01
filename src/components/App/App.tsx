import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';

import css from '../App/App.module.css';

export default function App() {

  document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
    }
  });

  return (
    <>
      <Header />
      <div className={css.scrollContainer}>
        <Hero />
        <Advantages />
        <About />
      </div>
    </>
  );
}