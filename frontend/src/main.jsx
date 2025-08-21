import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToastContext from "./contexts/ToastContext.jsx";
import FollowCursor from "./components/Animation/FollowCursor.jsx";
import UserContext from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContext>
      <UserContext>
        <FollowCursor color="#2f4b776d" />
        <App />
      </UserContext>
    </ToastContext>
  </StrictMode>
);
