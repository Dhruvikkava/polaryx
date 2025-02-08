import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about-us" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <Toolbar disableGutters>
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <div>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#303741",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </div>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: "#213650" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>
                    <Typography
                      className={`font-weight-600 ${
                        page.path === location.pathname ? "active active-underline" : ""
                      }`}
                      sx={{ textAlign: "center" }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation (Using ListItemButton) */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: { md: "end" } }}>
              <List sx={{ display: "flex", alignItems: "center", p: 0 }}>
                {pages.map((page) => (
                  <ListItem key={page.name} sx={{ pl: 3, pr: 0 }}>
                    <ListItemButton
                    disableRipple
                      onClick={() => handleNavigate(page.path)}
                      className={`font-weight-600 bg-transparent ${
                        page.path === location.pathname ? "active active-underline" : ""
                      }`}
                      sx={{
                        p: 0,
                        color: "#213650",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {page.name}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Header;
