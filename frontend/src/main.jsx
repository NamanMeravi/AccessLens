import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToastContext from "./contexts/ToastContext.jsx";
import FollowCursor from "./components/Animation/FollowCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContext>
      <FollowCursor color="#2f4b776d" />
      <App />
    </ToastContext>
  </StrictMode>
);
