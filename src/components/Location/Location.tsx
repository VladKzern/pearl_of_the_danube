import { useEffect, useState } from "react";
import styles from "./Location.module.css";

const items = [
  { src: "/src/assets/img/market.jpg", label: "Автостанція" },
  { src: "/src/assets/img/market.jpg", label: "Міський ринок" },
  { src: "/src/assets/img/market.jpg", label: "АТБ" },
  { src: "/src/assets/img/school.jpg", label: "Школа" },
  { src: "/src/assets/img/school.jpg", label: "Дитячий садок" },
];

export default function Location() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  useEffect(() => {
    
    items.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndexes((prev) => [...prev, i]);
      }, i * 500); 
    });
  }, []);

  return (
    <section className={styles.locationSection}>
      {items.map((item, i) => (
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
    </section>
  );
}