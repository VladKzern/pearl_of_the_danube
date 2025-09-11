import { useState } from "react";
import market from "../../assets/img/market_mobile.jpg";
import flatImg from "../../assets/img/3.webp";
import infrostructure from "../../assets/img/ifrostructure.png";
import plan from "../../assets/img/plan.png";
import css from "./Advantages.module.css";

const slides = [
  {
    src: infrostructure,
    text: "Зручне розташування у центрі міста",
  },
  {
    src: plan,
    text: "Сучасні планування квартир",
  },
  {
    src: flatImg,
    text: "Надійний девелопер та якісні матеріали",
  },
  {
    src: market,
    text: "Розвинена інфраструктура поруч",
  },
];

export default function Advantages() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={css.advantages} id="advantages">
      <h2 className={css.title}>Наші переваги</h2>
      <div className={css.slider}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${css.slide} ${i === current ? css.active : ""}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          >
            <div className={css.textBox}>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}

        <button className={`${css.btn} ${css.prev}`} onClick={prevSlide}>
          ‹
        </button>
        <button className={`${css.btn} ${css.next}`} onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
}