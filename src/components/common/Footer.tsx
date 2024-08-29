import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 4,
        px: 2,
        boxShadow: "0 -1px 2px rgba(0, 0, 0, 0.1)",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Derechos de autor y enlaces */}
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              gutterBottom
            >
              &copy; 2024 Esmera School. Todos los derechos reservados.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
            >
              <Link
                href="/politicas-de-privacidad"
                variant="body2"
                color="primary"
                underline="hover"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos-del-servicio"
                variant="body2"
                color="primary"
                underline="hover"
              >
                Términos del Servicio
              </Link>
            </Box>
          </Box>

          {/* Información de contacto */}
          <Box textAlign="center" mt={{ xs: 2, md: 0 }}>
            <Typography variant="body2" color="textSecondary">
              Teléfono: +34 608 610 122
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email:{" "}
              <Link
                href="mailto:admin@esmeraschool.com"
                color="primary"
                underline="hover"
              >
                admin@esmeraschool.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
