// <reference path="path/types.d.ts" />

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
// import TopBarProgress from "react-topbar-progress-indicator";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import OperatorTable from "./OperatorTable/OperatorTable";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div id="app" className="app">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Typography variant="h1">Sorted operators</Typography>
        <OperatorTable />
      </ThemeProvider>
    </div>
  );
};

export default App;
