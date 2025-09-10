import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Location from "../Location/Location";
import Flats from "../Flats/Flats";
import FixedCallButton from "../FixedCallButton/FixedCallButton";
import CookieBanner from "../Cookies/CookieBanner";
import CookiesPolicy from "../Cookies/CookiesPolicy";
import Terms from "../Terms/Terms";
import css from "../App/App.module.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <FixedCallButton />
            <div className={css.scrollContainer}>
              <Hero />
              <Advantages />
              <About />
              <Location />
              <Flats />
            </div>
            <CookieBanner />
          </>
        }
      />
      <Route
        path="/cookiespolicy"
        element={
          <>
            <Header />
            <CookiesPolicy />
          </>
        }
      />
      <Route
        path="/terms"
        element={
          <>
            <Header />
            <Terms />
          </>
        }
      />
    </Routes>
  );
}