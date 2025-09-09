import { useState } from "react";
import { Phone } from "lucide-react";
import ConsultationModal from "../Modal/ConsultationModal";
import css from "./FixedCallButton.module.css";

export default function FixedCallButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={css.fixedButton}
        onClick={() => setIsOpen(true)}
        aria-label="Замовити консультацію"
      >
        <Phone size={30} />
      </button>

      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}


