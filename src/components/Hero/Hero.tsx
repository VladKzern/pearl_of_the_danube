import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.heroSection} id="home">
      <div className={css.heroContent}>
        <h1>Ласкаво просимо до Перлини Дунаю</h1>
        <p>Ваш дім — наша турбота</p>
      </div>
    </section>
  );
}