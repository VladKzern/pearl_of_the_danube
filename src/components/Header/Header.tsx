import Navbar from 'react-bootstrap/Navbar';
import css from './Header.module.css';

export default function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <div className={`${css.headerContainer}`}>
        <Navbar.Brand href="#home" className={css.brandContainer}>
          <div className={css.brandLine}>Житлово-Будівельний Кооператив</div>
          <div className={css.mainTitleLogo}>ПЕРЛИНА</div>
          <div className={css.mainTitleLogo}>ДУНАЮ</div>
          <div className={css.brandLine}>Обслуговуючий кооператив</div>
        </Navbar.Brand>

        <nav className={css.nav}>
          <a href="#home" className={css.navItem}>Головна</a>

          <div className={css.dropdown}>
            <a href="#about" className={`${css.dropbtn} ${css.navItem}`}>Про комплекс</a>
            <div className={css.dropdownContent}>
              <a href="#advantages" className={css.navItem}>Наші переваги</a>
              <a href="#location" className={css.navItem}>Розташування</a>
              <a href="#infrastructure" className={css.navItem}>Інфраструктура</a>
            </div>
          </div>

          <a href="#flats" className={css.navItem}>Вибір квартир</a>

          <div className={css.dropdown}>
            <a href="#" className={`${css.dropbtn} ${css.navItem}`}>Покупцям</a>
            <div className={css.dropdownContent}>
              <a href="#terms" className={css.navItem}>Умови придбання</a>
              <a href="#progress" className={css.navItem}>Хід будівництва</a>
              <a href="#developer" className={css.navItem}>Девелопер</a>
            </div>
          </div>

          <a href="#contacts" className={css.navItem}>Контакти</a>
        </nav>

        <div className={css.infoContainer}>
          <div className={css.phoneNumbers}>
            <p className={css.phoneNumber}> + 38 (067)-818-18-37</p>
            <p className={css.phoneNumber}> + 38 (050)-336-33-33</p>
          </div>
          <a href="#location" className={css.locationLink}> вул. Хмельницького Богдана, 14, м. Кілія</a>
        </div>
      </div>
    </Navbar>
  );
}