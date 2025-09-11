import { useEffect, useState } from "react";

export function useCookieBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsBannerVisible(true);
    }
  }, []);

  return { isBannerVisible, hideBanner: () => setIsBannerVisible(false) };
}