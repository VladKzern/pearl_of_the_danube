import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.heroSection} id="home">
      <div className={css.heroContent}>
        <h1 className={css.mainHero}>Ласкаво просимо до Перлини Дунаю!</h1>
        <p className={css.textTitle}>Ваш дім — наша турбота.</p>
      </div>
    </section>
  );
}