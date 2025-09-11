import { createContext, useContext, useEffect, useState } from "react";

interface CookieBannerContextType {
  isBannerVisible: boolean;
  acceptCookies: () => void;
  hideBanner: () => void;
}

const CookieBannerContext = createContext<CookieBannerContextType | undefined>(undefined);

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

// eslint-disable-next-line react-refresh/only-export-components
export function useCookieBanner() {
  const context = useContext(CookieBannerContext);
  if (!context) {
    throw new Error("useCookieBanner must be used within CookieBannerProvider");
  }
  return context;
}
