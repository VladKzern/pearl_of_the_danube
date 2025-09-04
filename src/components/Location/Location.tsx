import { useEffect, useState } from "react";
import styles from "./Location.module.css";
import { useHeaderHeight } from "../Header/useHeaderHeight"; 
import market from "../../assets/img/market.jpg";
import flatImg from "../../assets/img/3.webp";
import school from "../../assets/img/school.jpg";

const items = [
  { src: market, label: "Автостанція" },
  { src: market, label: "Міський ринок" },
  { src: flatImg, label: "АТБ" },
  { src: school, label: "Школа" },
  { src: school, label: "Дитячий садок" },
];

export default function Location() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    items.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndexes((prev) => [...prev, i]);
      }, i * 500);
    });
  }, []);

  return (
    <section
      className={styles.locationSection}
      style={{
        marginTop: headerHeight,
        height: `calc(100% - ${headerHeight}px)`,
      }}
    id="location">
      <div className={styles.row}>
        {items.slice(0, 2).map((item, i) => (
          <div
            key={i}
            className={`${styles.locationItem} ${
              activeIndexes.includes(i) ? styles.active : ""
            }`}
          >
            <img src={item.src} alt={item.label} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        {items.slice(2, 3).map((item, i) => (
          <div
            key={i + 2}
            className={`${styles.locationItem} ${
              activeIndexes.includes(i + 2) ? styles.active : ""
            }`}
          >
            <img src={item.src} alt={item.label} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        {items.slice(3).map((item, i) => (
          <div
            key={i + 3}
            className={`${styles.locationItem} ${
              activeIndexes.includes(i + 3) ? styles.active : ""
            }`}
          >
            <img src={item.src} alt={item.label} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}