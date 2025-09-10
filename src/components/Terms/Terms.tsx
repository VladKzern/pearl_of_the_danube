import Header from "../Header/Header";
import css from "./Terms.module.css";

export default function Terms() {
  return (
    <>
      <Header />
      <section id="terms" className={css.terms}>
        <div className={css.overlay}></div>
        <div className={css.content}>
          <h2 className={css.title}>УМОВИ ПРИДБАННЯ</h2>

          <p className={css.text}>Шановні покупці!</p>

          <p className={css.text}>
            <span className={css.highlight}>ОК «ЖБК «ПЕРЛИНА ДУНАЮ»</span> ― це
            унікальний комплекс, де зручність та функціональність сучасного житла
            гармонійно поєднуються з розташуванням. Гарантовано високий рівень
            будівництва та функціональні архітектурні рішення приємно поєднуються з
            комфортним рівнем вартості квадратного метра.
          </p>

          <p className={css.text}>
            Продаж квартир здійснюється за{" "}
            <span className={css.highlight}>
              Договорами переуступки прав учасника фонду фінансування будівництва
            </span>
            , створених <span className={css.highlight}>ТОВ «АГРОСЕРВІС»</span>.
          </p>

          {/* Дві колонки */}
          <div className={css.columns}>
            <div className={css.column}>
              <h3 className={css.subtitle}>
                ПРИДБАННЯ КВАРТИРИ ЗА ЦІНОЮ 100% ОПЛАТИ:
              </h3>
              <ul className={css.list}>
                <li>100% оплата</li>
                <li>
                  Програма підтримки інвестора* – 50/50 або 70/30 до 3 місяців без
                  відсотків з можливістю оплати залишку в кінці терміну за
                  фіксованою вартістю
                </li>
              </ul>
              <p className={css.note}>
                Дізнатися більше про процес придбання житла в <span className={css.highlight}>ОК «ЖБК «ПЕРЛИНА ДУНАЮ»</span> Ви можете
                у відділі продажів по телефону:{" "}
                <a href="tel:+380678181837" className={css.link}>
                  (067) 818-18-37
                </a>
                . E-mail:{" "}
                <a
                  href="mailto:perlynadanube.sale@gmail.com"
                  className={css.link}
                >
                  perlynadanube.sale@gmail.com
                </a>
              </p>
            </div>

            <div className={css.column}>
              <h3 className={css.subtitle}>ПРИДБАННЯ КВАРТИРИ У РОЗСТРОЧКУ:</h3>
              <ul className={css.list}>
                <li>
                  Програма розстрочки «12,24,36»* – за умови оплати 30% від вартості
                  квартири, залишок сплачується протягом 12–36 місяців за ціною
                  розстрочки.
                </li>
                <li>Індивідуальний підхід до кожного покупця!</li>
              </ul>
              <p className={css.note}>
                * діє прив'язка непогашеного залишку до курсу долара згідно НБУ
              </p>
              <p className={css.note}>
                ** Детальні умови розстрочки уточнюйте у відділі продажів
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
