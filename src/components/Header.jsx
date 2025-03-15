import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Logo from "./Logo";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact-us" },
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "transparent" : "#ffffff",
        boxShadow: scrolled ? "none" : "var(--Paper-shadow)",
      }}
    >
      <div className="container">
        <Toolbar
          disableGutters
          sx={{
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s ease-in-out",
            borderRadius: "15px",
            margin: scrolled ? "10px auto 0 auto" : "0",
            boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <div className="d-flex justify-content-between align-items-center w-100 px-3">
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
                onClick={toggleDrawer(true)}
                sx={{ color: "#213650" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Drawer for Mobile Menu */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ width: 250, p: 2 }}>
                <List>
                  {pages.map((page, index) =>
                    page.name === "Products" ? (
                      <div key={index}>
                        <ListItem
                          button
                          onClick={() => setProductOpen(!productOpen)}
                        >
                          <ListItemText
                            primaryTypographyProps={{
                              sx: { fontSize: "0.875rem" },
                            }}
                            primary="Products"
                          />
                          {productOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={productOpen} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {productSubMenu.map((subItem, subIndex) => (
                              <ListItem
                                button
                                key={subIndex}
                                sx={{ pl: 4 }}
                                onClick={() => handleNavigate(subItem.path)}
                              >
                                <ListItemText
                                  primaryTypographyProps={{
                                    sx: { fontSize: "0.875rem" },
                                  }}
                                  primary={subItem.name}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                        <Divider />
                      </div>
                    ) : (
                      <ListItem
                        button
                        key={index}
                        onClick={() => handleNavigate(page.path)}
                      >
                        <ListItemText
                          primaryTypographyProps={{
                            sx: { fontSize: "0.875rem" },
                          }}
                          primary={page.name}
                        />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Drawer>

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
