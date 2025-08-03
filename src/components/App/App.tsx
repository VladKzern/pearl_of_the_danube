import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About'
import css from '../App/App.module.css'

export default function App() {
  return (
    <>
      <Header />
      <div className={css.scrollContainer}>
        <Hero />
        <About />
      </div>
    </>
  );
}