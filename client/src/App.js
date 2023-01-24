//import { Dashboard } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"; 
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";

import Products from "scenes/products";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Customers from "scenes/customers"; 
import Transactions from "scenes/transactions"
import Overview from "scenes/overview";
import Geography from "scenes/geography";
import Chat from "scenes/chat"
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";



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
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/breakdown" element={<Breakdown />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/performance" element={<Performance />} />

     
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
