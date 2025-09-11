import { useEffect, useState } from "react";
import { CookieBannerContext } from "../../hooks/CookieBannerContext";

export function CookieBannerProvider({ children }: { children: React.ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsBannerVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsBannerVisible(false);
  };

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <CookieBannerContext.Provider value={{ isBannerVisible, acceptCookies, hideBanner }}>
      {children}
    </CookieBannerContext.Provider>
  );
}
export { CookieBannerContext };

