import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound: React.FC = () => {
  useDocumentTitle("Página no encontrada");

  return (
    <Container maxWidth="sm" sx={{ my: 4, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
          }}
        >
          <ErrorOutlineIcon
            sx={{ fontSize: 100, color: "error.main", mb: 2 }}
          />
          <Typography variant="h2" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" component="p" paragraph>
            Lo sentimos, la página que buscas no existe.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Volver al Inicio
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default NotFound;
