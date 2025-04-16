import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/analytics";

export function GAListener() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}
