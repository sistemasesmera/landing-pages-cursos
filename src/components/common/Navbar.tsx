import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.avif";
import { motion } from "framer-motion"; // Importa Framer Motion

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation(); // Obtén la ubicación actual

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Determina si el enlace es el seleccionado
  const getLinkStyle = (path: string) => ({
    ...navLinkStyle,
    boxShadow:
      location.pathname === path ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "none", // Aplica sombra si está seleccionado
  });

  const navLinks = (
    <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
      <Link to="/perfectgel" style={getLinkStyle("/perfectgel")}>
        Perfect Gel
      </Link>
      <Link to="/propress" style={getLinkStyle("/propress")}>
        Pro Press
      </Link>
    </Box>
  );

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link to="/perfectgel" style={drawerLinkStyle}>
            <ListItemText primary="Perfect Gel" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/propress" style={drawerLinkStyle}>
            <ListItemText primary="Pro Press" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff", // Fondo blanco
          color: "#1a1a1a", // Color del texto oscuro
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // Sombra más pronunciada
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Línea sutil para mayor definición
        }}
        elevation={4}
      >
        <Toolbar className="flex items-center">
          {/* Icono del menú para pantallas pequeñas */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logotipo con redirección a la raíz */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: isMobile ? "flex-end" : "center", // Alinea el logo a la derecha en móvil
            }}
          >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="Logo" style={{ height: "40px" }} />
            </Link>
          </Box>

          {/* Enlaces de navegación en pantallas grandes */}
          {!isMobile && navLinks}

          {/* Drawer para pantallas pequeñas */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#262626", // Color de los enlaces
  margin: "0 16px",
  fontWeight: 600,
  fontSize: "16px",
  padding: "8px 16px", // Añadir padding para aumentar el espacio
  transition: "box-shadow 0.3s ease", // Transición suave para la sombra
};

const drawerLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#1a1a1a", // Color del texto en el drawer
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "8px 16px",
};

export default Navbar;
