import { Box, IconButton } from "@mui/material";
import Logo from "./logo";
import { IconMenu2 } from "@tabler/icons";

function Header() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Logo />
        </Box>
        <IconButton>
          <IconMenu2 />
        </IconButton>
      </Box>
    </>
  );
}

export default Header;
