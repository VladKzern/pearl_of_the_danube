import Header from "../Header/Header";
import css from "./CookiesPolicy.module.css";

export default function CookiesPolicy() {
  return (
    <>
      <Header />
      <section className={css.policySection}>
        <div className={css.container}>
          <h2 className={css.title}>Політика використання Cookie</h2>
          <p className={css.text}>
            Ми використовуємо cookie для забезпечення коректної роботи сайту,
            персоналізації контенту та аналізу відвідувань. 
          </p>
          <p className={css.text}>
            Використовуючи цей сайт, ви погоджуєтеся на використання cookie згідно з цією політикою.
          </p>
        </div>
      </section>
      <a href="/">Повернутися на головну</a>
    </>
  );
}