import { createContext } from "react";

export interface CookieBannerContextType {
  isBannerVisible: boolean;
  acceptCookies: () => void;
  hideBanner: () => void;
}

export const CookieBannerContext = createContext<CookieBannerContextType | undefined>(undefined);