import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import css from './Header.module.css';

export default function NavbarDarkExample() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Відстеження ширини екрану
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  return (
    <div className={css.headerContainer}>
      <div className={css.brandContainer}>
        
        <div className={css.mainTitleLogo}>ПЕРЛИНА</div>
        <div className={css.mainTitleLogo}>ДУНАЮ</div>
        
      </div>

      <div className={css.navigationContainer}>
      <nav className={css.nav}>
        <a href="#home" className={css.navItem}>Головна</a>

        {/* Про комплекс */}
        <div
          className={css.dropdown}
          onMouseEnter={() => !isMobile && setOpenDropdown('about')}
          onMouseLeave={() => !isMobile && setOpenDropdown(null)}
        >
          <button
            className={`${css.dropbtn} ${css.navItem}`}
            onClick={() => toggleDropdown('about')}
          >
            Про комплекс
            <IoIosArrowDown
              className={`${css.arrowIcon} ${openDropdown === 'about' ? css.activeArrow : ''}`}
            />
          </button>
          {(openDropdown === 'about') && (
            <div className={css.dropdownContent}>
              <a href="#advantages" className={css.navItem}>Наші переваги</a>
              <a href="#location" className={css.navItem}>Розташування</a>
              <a href="#infrastructure" className={css.navItem}>Інфраструктура</a>
            </div>
          )}
        </div>

        <a href="#flats" className={css.navItem}>Вибір квартир</a>

        {/* Покупцям */}
        <div
          className={css.dropdown}
          onMouseEnter={() => !isMobile && setOpenDropdown('buyers')}
          onMouseLeave={() => !isMobile && setOpenDropdown(null)}
        >
          <button
            className={`${css.dropbtn} ${css.navItem}`}
            onClick={() => toggleDropdown('buyers')}
          >
            Покупцям
            <IoIosArrowDown
              className={`${css.arrowIcon} ${openDropdown === 'buyers' ? css.activeArrow : ''}`}
            />
          </button>
          {(openDropdown === 'buyers') && (
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
        </div>
      </div>
      <div className={css.locationContainer}>
        <a href="#location" className={css.locationLink}> вул. Хмельницького Богдана, 14, м. Кілія</a>
      </div>
      </div>
    </div>
  );
}
