import { useState, useEffect } from "react";
import css from "./Flats.module.css";
import kv2m from "../../assets/img/kv2-mirror.png";
import kv3 from "../../assets/img/kv3.png";
import kv1i from "../../assets/img/kv1-inner.png";
import kv1b from "../../assets/img/kv1-backside.png";
import kv2l from "../../assets/img/kv2-left.png";

const images = [
  { src: kv2m, label: "2-кімнатна (дзеркальна)", category: "2" },
  { src: kv3, label: "3-кімнатна", category: "3" },
  { src: kv1i, label: "1-кімнатна (внутрішня)", category: "1" },
  { src: kv1b, label: "1-кімнатна (тильна сторона)", category: "1" },
  { src: kv2l, label: "2-кімнатна (ліва)", category: "2" },
];

export default function Flats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<"all" | "1" | "2" | "3">("all");
  const [fade, setFade] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // 🔹 Вирахування кількості слайдів по ширині вікна
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 878) {
        setVisibleSlides(1); // мобільна
      } else if (window.innerWidth < 1200) {
        setVisibleSlides(2); // планшет
      } else {
        setVisibleSlides(3); // десктоп
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Фільтрація по категорії
  const filteredImages =
    currentCategory === "all"
      ? images
      : images.filter((img) => img.category === currentCategory);

  // Зсув по одному слайду
  const nextSlide = () => {
    if (currentIndex < filteredImages.length - visibleSlides) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setLightboxIndex(null);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 400);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  // Клавіші
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex !== null) closeLightbox();
      if (e.key === "ArrowRight" && lightboxIndex !== null && lightboxIndex < images.length - 1) {
        setLightboxIndex(lightboxIndex + 1);
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Зміна категорії
  const handleCategoryClick = (category: "all" | "1" | "2" | "3") => {
    setFade(true);
    setTimeout(() => {
      setCurrentCategory(category);
      setCurrentIndex(0);
      setFade(false);
    }, 300);
  };

  return (
    <section className={css.flats} id="flats">
      <div className={css.container}>
        <h2 className={css.title}>ВИБІР КВАРТИР</h2>

        {/* Кнопки категорій */}
        <div className={css.buttonsContainer}>
          <div className={css.categoryButtons}>
            {["all", "1", "2", "3"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${css.specialCategoryBtn} ${currentCategory === cat ? css.active : ""}`}
                onClick={() => handleCategoryClick(cat as "all" | "1" | "2" | "3")}
              >
                {cat === "all" ? "Всі планування" : `${cat}-кімнатні`}
              </button>
            ))}
          </div>
          <button type="button" className={css.consultationBtn}>
            КОНСУЛЬТАЦІЯ
          </button>
        </div>

        {/* Слайдер */}
        <div className={css.slider}>
          <button
            onClick={prevSlide}
            className={css.navBtn}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <div className={css.sliderWindow}>
            <div
              className={`${css.sliderTrack} ${fade ? css.fadeOut : css.fadeIn}`}
              style={{ transform: `translateX(-${currentIndex * (320 + 20)}px)` }} // 320 ширина + 20 відступ
            >
              {filteredImages.map((item, i) => {
                const globalIndex = images.indexOf(item);
                return (
                  <div key={i} className={css.slide} onClick={() => openLightbox(globalIndex)}>
                    <p className={css.flatLabel}>{item.label}</p>
                    <img src={item.src} alt={item.label} />
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className={css.navBtn}
            disabled={currentIndex >= filteredImages.length - visibleSlides}
          >
            ›
          </button>
        </div>

        {/* Ціна */}
        <div className={css.priceContainer}>
          <p className={css.string}>
            Ціна квартири від: <span>420 дол./м<sup>2</sup></span>
          </p>
          <p className={css.string}>
            дійсна до: <span>30.09.2025</span>
          </p>
        </div>
      </div>

      {/* Лайтбокс */}
      {lightboxIndex !== null && (
        <div className={css.lightbox} onClick={closeLightbox}>
          <button className={css.closeBtn} onClick={closeLightbox}>×</button>
          <button className={css.prevBtn} onClick={prevLightbox} disabled={lightboxIndex === 0}>‹</button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].label}
            className={`${css.lightboxImg} ${isClosing ? css.zoomOut : ""}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className={css.nextBtn} onClick={nextLightbox} disabled={lightboxIndex === images.length - 1}>›</button>
        </div>
      )}
    </section>
  );
}
