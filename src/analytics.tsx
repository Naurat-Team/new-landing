import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const trackPageView = (path) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};
