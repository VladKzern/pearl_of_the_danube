import { useEffect, useState } from "react";

export function useCookieBanner() {
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

  return { isBannerVisible, acceptCookies, hideBanner };
}
