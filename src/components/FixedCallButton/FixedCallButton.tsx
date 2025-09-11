import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import ConsultationModal from "../Modal/ConsultationModal";
import css from "./FixedCallButton.module.css";
import { useCookieBanner } from "../../hooks/useCookieBanner";

export default function FixedCallButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInFlats, setIsInFlats] = useState(false);
  const flatsRef = useRef<HTMLElement | null>(null);
  const { isBannerVisible } = useCookieBanner();

  useEffect(() => {
    flatsRef.current = document.getElementById("flats");

    if (!flatsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInFlats(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
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
        style={{
          bottom: isBannerVisible ? "150px" : "20px",
        }}
        onClick={() => setIsOpen(true)}
      >
        <Phone size={30} />
      </button>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

