//import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"; 
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";

//this function is for theme, light and dark modes thats stored in the state. Material UI documentation? 
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
  <BrowserRouter> 
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/*its like a css reset*/}
      <Routes> 
        <Route element={<Layout />}> {/* every route thats in here will have the same sidebar and navbar layout */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* if we go to the default homepage we will be navigated to the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* this is the dashboard route which will be rendered */}
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
