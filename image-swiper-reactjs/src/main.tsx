/**
 * Application entry point. React 18+ uses createRoot to mount the app into the DOM.
 * StrictMode is disabled so Swiper does not double-mount in dev (which can make images flash then disappear).
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(<App />);
