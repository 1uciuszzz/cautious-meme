import { AppBar, Box, Toolbar } from "@mui/material";
import Header from "./header";
import Sidebar from "./sidebar";
import color from "../styles/color.module.scss";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: color.primary,
          color: color.secondary,
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>

      <Box>
        <Toolbar />
        <Sidebar />
      </Box>

      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
