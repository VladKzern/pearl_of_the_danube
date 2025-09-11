import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useCookieBanner } from "./CookieBannerContext";

import css from "./CookieBanner.module.css";

export default function CookieBanner() {
  const { isBannerVisible, acceptCookies, hideBanner } = useCookieBanner();

  if (!isBannerVisible) return null;

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
        <button onClick={acceptCookies} className={css.button}>
          Погоджуюсь
        </button>
        <button onClick={hideBanner} className={css.close}>
          <IoMdClose size={20} />
        </button>
      </div>
    </div>
  );
}


