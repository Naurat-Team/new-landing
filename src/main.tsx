import { createRoot } from "react-dom/client";
import { initGA } from "@/analytics";
import App from "@/App.tsx";
import "@/index.css";
import "@/i18n";

initGA();

createRoot(document.getElementById("root")!).render(<App />);
