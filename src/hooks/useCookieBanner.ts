import { useContext } from "react";
import { CookieBannerContext } from "../components/Cookies/CookieBannerProvider";

export function useCookieBanner() {
  const context = useContext(CookieBannerContext);
  if (!context) {
    throw new Error("useCookieBanner must be used within CookieBannerProvider");
  }
  return context;
}
