import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import css from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={css.banner}>
      <p>
        Ми використовуємо cookie для комфортної роботи сайту. 
        Детальніше читайте у{" "}
        <Link to="/cookiespolicy" className={css.link}>
          політиці cookie
        </Link>.
      </p>

      <div className={css.actions}>
        <button onClick={handleAccept} className={css.button}>
          Погоджуюсь
        </button>
        <button onClick={handleClose} className={css.close}>
          <IoMdClose size={20} />
        </button>
      </div>
    </div>
  );
}
