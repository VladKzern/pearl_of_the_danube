import { useState } from "react";
import css from "./Advantages.module.css";

const slides = [
  {
    src: "./src/assets/img/market.jpg",
    text: "Зручне розташування у центрі міста",
  },
  {
    src: "./src/assets/img/3.webp",
    text: "Сучасні планування квартир",
  },
  {
    src: "./src/assets/img/market.jpg",
    text: "Надійний девелопер та якісні матеріали",
  },
  {
    src: "./src/assets/img/market.jpg",
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