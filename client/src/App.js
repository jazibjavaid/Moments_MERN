import { BrowserRoute, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRoute>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path = "/home" element = {<HomePage />}/>
          <Route path = "/" element = {<LoginPage />}/>
          <Route path = "/profile/:userId" element = {<ProfilePage />}/>
        </Routes>
      </ThemeProvider>
      </BrowserRoute>
    </div>
  );
}

export default App;
