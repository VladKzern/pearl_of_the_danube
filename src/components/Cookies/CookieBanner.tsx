import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  if (!visible) return null;

  return (
    <div className={css.banner}>
      <p>
        Ми використовуємо cookie для покращення вашого досвіду. 
        Детальніше читайте у{" "}
        <Link to="/cookiespolicy" className={css.link}>
          політиці cookie
        </Link>.
      </p>
      <button onClick={handleAccept} className={css.button}>
        Погоджуюсь
      </button>
    </div>
  );
}
