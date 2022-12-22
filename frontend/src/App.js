import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react"; 
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

//this function is for theme, light and dark modes thats stored in the state. Material UI documentation? 
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
   <ThemeProvider theme={theme}>
     <CssBaseline /> {/*its like a css reset*/}
   </ThemeProvider>
    </div>
  );
}

export default App;
