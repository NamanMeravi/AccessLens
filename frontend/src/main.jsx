import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToastContext from "./contexts/ToastContext.jsx";
import FollowCursor from "./components/Animation/FollowCursor.jsx";
import UserContext from "./contexts/UserContext.jsx";

// custom font in MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// custom MUI theme
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContext>
        <UserContext>
          <FollowCursor color="#2f4b776d" />
          <App />
        </UserContext>
      </ToastContext>
    </ThemeProvider>
  </StrictMode>
);
