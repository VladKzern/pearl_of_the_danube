import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Header.module.css";

export default function NavbarDarkExample() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [onAdvantages, setOnAdvantages] = useState(false);
  const [onFlats, setOnFlats] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // хелпер для переходу і скролу
  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setBurgerOpen(false); // закриваємо меню на мобільному
  };

  // відстеження ширини
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 926;
      setIsMobile(mobile);

      if (!mobile) {
        setBurgerOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const sectionIds = ["advantages", "flats"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "advantages") {
            setOnAdvantages(entry.isIntersecting);
          }
          if (entry.target.id === "flats") {
            setOnFlats(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${css.headerContainer} ${
        onAdvantages ? css.onAdvantages : ""
      } ${onFlats ? css.onFlatsVisible : ""}`}
    >
      <div className={css.brandContainer}>
        <div className={css.mainTitleLogo}>ПЕРЛИНА</div>
        <div className={css.mainTitleLogo}>ДУНАЮ</div>
      </div>

      {/* Mobile header */}
      {isMobile && (
        <div className={css.mobileHeaderContainer}>
          <div
            className={`${css.burger} ${burgerOpen ? css.active : ""}`}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={css.logoPhoneContainer}>
            <div className={css.mobileBrandContainer}>
              <div className={css.mobileMainTitleLogo}>ПЕРЛИНА</div>
              <div className={css.mobileMainTitleLogo}>ДУНАЮ</div>
            </div>

            <div className={css.infoContainer}>
              <div className={css.phoneNumbers}>
                <p className={css.phoneNumber}>
                  {" "}
                  <FaPhoneAlt className={css.phoneIcon} /> + 38 (067)-818-18-37
                </p>
                <p className={css.phoneNumber}>
                  {" "}
                  <FaPhoneAlt className={css.phoneIcon} /> + 38 (050)-336-33-33
                </p>
                <div className={css.locationContainer}>
                  <button
                    onClick={() => handleNavClick("location")}
                    className={css.locationLink}
                  >
                    вул. Хмельницького Богдана, 14, м. Кілія
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      {!isMobile && (
        <div className={css.navigationContainer}>
          <nav className={css.nav}>
            <button onClick={() => handleNavClick("home")} className={css.navItem}>
              Головна
            </button>

            <div
              className={css.dropdown}
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${css.dropbtn} ${css.navItem}`}>
                Про комплекс
                <IoIosArrowDown
                  className={`${css.arrowIcon} ${
                    openDropdown === "about" ? css.activeArrow : ""
                  }`}
                />
              </button>
              {openDropdown === "about" && (
                <div className={css.dropdownContent}>
                  <button
                    onClick={() => handleNavClick("advantages")}
                    className={css.navItem}
                  >
                    Наші переваги
                  </button>
                  <button
                    onClick={() => handleNavClick("location")}
                    className={css.navItem}
                  >
                    Розташування
                  </button>
                  <button
                    onClick={() => handleNavClick("infrastructure")}
                    className={css.navItem}
                  >
                    Інфраструктура
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick("flats")} className={css.navItem}>
              Вибір квартир
            </button>

            <div
              className={css.dropdown}
              onMouseEnter={() => setOpenDropdown("buyers")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${css.dropbtn} ${css.navItem}`}>
                Покупцям
                <IoIosArrowDown
                  className={`${css.arrowIcon} ${
                    openDropdown === "buyers" ? css.activeArrow : ""
                  }`}
                />
              </button>
              {openDropdown === "buyers" && (
                <div className={css.dropdownContent}>
                  <button
                    onClick={() => navigate("/terms")}
                    className={css.navItem}
                  >
                    Умови придбання
                  </button>
                  <button
                    onClick={() => handleNavClick("progress")}
                    className={css.navItem}
                  >
                    Хід будівництва
                  </button>
                  <button
                    onClick={() => handleNavClick("developer")}
                    className={css.navItem}
                  >
                    Девелопер
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("contacts")}
              className={css.navItem}
            >
              Контакти
            </button>
          </nav>

          <div className={css.infoContainer}>
            <div className={css.phoneNumbers}>
              <p className={css.phoneNumber}>
                {" "}
                <FaPhoneAlt className={css.phoneIcon} /> + 38 (067)-818-18-37
              </p>
              <p className={css.phoneNumber}>
                {" "}
                <FaPhoneAlt className={css.phoneIcon} /> + 38 (050)-336-33-33
              </p>
              <div className={css.locationContainer}>
                <button
                  onClick={() => handleNavClick("location")}
                  className={css.locationLink}
                >
                  вул. Хмельницького Богдана, 14, м. Кілія
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMobile && (
        <>
          <div
            className={`${css.mobileMenuOverlay} ${burgerOpen ? css.active : ""}`}
            onClick={() => setBurgerOpen(false)}
          ></div>
          <div className={`${css.mobileMenu} ${burgerOpen ? css.active : ""}`}>
            <div className={css.mobileMenuInner}>
              <button onClick={() => handleNavClick("home")} className={css.locationLink}>ГОЛОВНА</button>
              <hr />
              <button onClick={() => handleNavClick("about")} className={css.locationLink}>ПРО КОМПЛЕКС</button>
              <button onClick={() => handleNavClick("advantages")} className={`${css.aSecond} ${css.locationLink}`}>
                Наші переваги
              </button>
              <button
                className={`${css.aSecond} ${css.locationLink}`}
                onClick={() => handleNavClick("location")}
              >
                Розташування
              </button>
              <button
                className={`${css.aSecond} ${css.locationLink}`}
                onClick={() => handleNavClick("infrastructure")}
              >
                Інфраструктура
              </button>
              <hr />
              <button onClick={() => handleNavClick("flats")} className={css.locationLink}>
                ВИБІР КВАРТИР
              </button>
              <hr />
              <button onClick={() => handleNavClick("buyers")} className={css.locationLink}>ПОКУПЦЯМ</button>
              <button
                onClick={() => {
                  navigate("/terms");
                  setBurgerOpen(false);
                }}
                className={`${css.aSecond} ${css.locationLink}`}
              >
                Умови придбання
              </button>
              <button
                className={`${css.aSecond} ${css.locationLink}`}
                onClick={() => handleNavClick("progress")}
              >
                Хід будівництва
              </button>
              <button
                className={`${css.aSecond} ${css.locationLink}`}
                onClick={() => handleNavClick("developer")}
              >
                Девелопер
              </button>
              <hr />
              <button onClick={() => handleNavClick("contacts")} className={css.locationLink}>КОНТАКТИ</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
