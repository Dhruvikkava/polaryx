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
import Logo from "./Logo";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
];

const productSubMenu = [
  { name: "Water treatment", path: "/products/water-treatment" },
  { name: "Cosmetics & Personal Care", path: "/products/cosmetic" },
  { name: "Purifier Agent", path: "/products/purifier-agent" },
  { name: "Food & Beverages", path: "/products/food-beverages" },
  { name: "Solvents", path: "/products/solvents" },
  { name: "Agro Chemicals", path: "/products/agro-chemical" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
            <Logo />

            {/* Mobile Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
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
                  <MenuItem
                    key={page.name}
                    onClick={() => handleNavigate(page.path)}
                  >
                    <Typography
                      className={`font-weight-600 text-uppercase ${
                        page.path === location.pathname ? "active" : ""
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "end" },
              }}
            >
              <List
                sx={{ display: "flex", alignItems: "center", p: 0 }}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                {pages.map((page) => (
                  <ListItem key={page.name} sx={{ pl: 3, pr: 0 }}>
                    {page.name === "Products" ? (
                      <ListItemButton
                        disableRipple
                        onMouseEnter={() => setIsMenuOpen(true)}
                        className={`font-weight-600 bg-transparent position-relative `}
                        sx={{
                          p: 0,
                          color: "#213650",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <p
                          className={`text-uppercase header-font-size ${
                            page.path === location.pathname
                              ? "active"
                              : "underline-hover"
                          }`}
                          onMouseEnter={() => setIsMenuOpen(true)}
                        >
                          {page.name}
                        </p>
                        {isMenuOpen && (
                          <div className="custom-dropdown px-3">
                            {productSubMenu.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="dropdown-item font-weight-600 text-uppercase"
                                onClick={() => handleNavigate(subItem.path)}
                              >
                                <p
                                  className={`${
                                    page.path === location.pathname
                                      ? "active"
                                      : "underline-hover"
                                  }`}
                                >
                                  {subItem.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </ListItemButton>
                    ) : (
                      <ListItemButton
                        disableRipple
                        onClick={() => handleNavigate(page.path)}
                        className={`font-weight-600 header-font-size text-uppercase bg-transparent ${
                          page.path === location.pathname
                            ? "active"
                            : "underline-hover"
                        }`}
                        sx={{
                          p: 0,
                          color: "#213650",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {page.name}
                      </ListItemButton>
                    )}
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
