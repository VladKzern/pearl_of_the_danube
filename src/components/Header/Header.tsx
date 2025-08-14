import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import css from './Header.module.css';

export default function NavbarDarkExample() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setBurgerOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    <div className={css.headerContainer}>
      <div className={css.brandContainer}>
        <div className={css.mainTitleLogo}>ПЕРЛИНА</div>
        <div className={css.mainTitleLogo}>ДУНАЮ</div>
      </div>

      {/* Бургер іконка */}
      {isMobile && (
        <div className={css.mobileHeaderContainer}>
          <div
            className={`${css.burger} ${burgerOpen ? css.active : ''}`}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={css.infoContainer}>
            <div className={css.phoneNumbers}>
              <p className={css.phoneNumber}> + 38 (067)-818-18-37</p>
              <p className={css.phoneNumber}> + 38 (050)-336-33-33</p>
              <div className={css.locationContainer}>
                <a href="#location" className={css.locationLink}>
                  вул. Хмельницького Богдана, 14, м. Кілія
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Навігація для десктопа */}
      {!isMobile && (
        <div className={css.navigationContainer}>
          <nav className={css.nav}>
            <a href="#home" className={css.navItem}>Головна</a>

            <div
              className={css.dropdown}
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${css.dropbtn} ${css.navItem}`}>
                Про комплекс
                <IoIosArrowDown
                  className={`${css.arrowIcon} ${openDropdown === 'about' ? css.activeArrow : ''}`}
                />
              </button>
              {openDropdown === 'about' && (
                <div className={css.dropdownContent}>
                  <a href="#advantages" className={css.navItem}>Наші переваги</a>
                  <a href="#location" className={css.navItem}>Розташування</a>
                  <a href="#infrastructure" className={css.navItem}>Інфраструктура</a>
                </div>
              )}
            </div>

            <a href="#flats" className={css.navItem}>Вибір квартир</a>

            <div
              className={css.dropdown}
              onMouseEnter={() => setOpenDropdown('buyers')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${css.dropbtn} ${css.navItem}`}>
                Покупцям
                <IoIosArrowDown
                  className={`${css.arrowIcon} ${openDropdown === 'buyers' ? css.activeArrow : ''}`}
                />
              </button>
              {openDropdown === 'buyers' && (
                <div className={css.dropdownContent}>
                  <a href="#terms" className={css.navItem}>Умови придбання</a>
                  <a href="#progress" className={css.navItem}>Хід будівництва</a>
                  <a href="#developer" className={css.navItem}>Девелопер</a>
                </div>
              )}
            </div>

            <a href="#contacts" className={css.navItem}>Контакти</a>
          </nav>

          <div className={css.infoContainer}>
            <div className={css.phoneNumbers}>
              <p className={css.phoneNumber}> + 38 (067)-818-18-37</p>
              <p className={css.phoneNumber}> + 38 (050)-336-33-33</p>
              <div className={css.locationContainer}>
                <a href="#location" className={css.locationLink}>
                  вул. Хмельницького Богдана, 14, м. Кілія
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
      <><div
          className={`${css.mobileMenuOverlay} ${burgerOpen ? css.active : ""}`}
          onClick={() => setBurgerOpen(false)}
        ></div><div className={`${css.mobileMenu} ${burgerOpen ? css.active : ""}`}>
            <div className={css.mobileMenuInner}>
              <a href="#home" onClick={() => setBurgerOpen(false)}>ГОЛОВНА</a>
              <hr />
              <a href="#about" onClick={() => setBurgerOpen(false)}>ПРО КОМПЛЕКС</a>
              <a href="#advantages" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Наші переваги</a>
              <a href="#location" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Розташування</a>
              <a href="#infrastructure" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Інфраструктура</a>
              <hr />
              <a href="#flats" onClick={() => setBurgerOpen(false)}>ВИБІР КВАРТИР</a>
              <hr />
              <a href="#buyers" onClick={() => setBurgerOpen(false)}>ПОКУПЦЯМ</a>
              <a href="#terms" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Умови придбання</a>
              <a href="#progress" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Хід будівництва</a>
              <a href="#developer" className={css.aSecond} onClick={() => setBurgerOpen(false)}>Девелопер</a>
              <hr />
              <a href="#contacts" onClick={() => setBurgerOpen(false)}>КОНТАКТИ</a>
            </div>
          </div></>
      )}
    </div>
  );
}
