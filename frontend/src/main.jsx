import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToastContext from "./contexts/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContext>
      <App />
    </ToastContext>
  </StrictMode>
);
