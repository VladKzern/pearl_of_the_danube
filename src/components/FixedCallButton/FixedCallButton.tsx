import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import ConsultationModal from "../Modal/ConsultationModal";
import css from "./FixedCallButton.module.css";

export default function FixedCallButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInFlats, setIsInFlats] = useState(false);
  const flatsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    flatsRef.current = document.getElementById("flats"); // id секції Flats

    if (!flatsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInFlats(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // коли 40% секції видно на екрані
    );

    observer.observe(flatsRef.current);

    return () => {
      if (flatsRef.current) observer.unobserve(flatsRef.current);
    };
  }, []);

  return (
    <>
      <button
        className={`${css.fixedButton} ${isInFlats ? css.centered : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Замовити консультацію"
      >
        <Phone size={30} />
      </button>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

