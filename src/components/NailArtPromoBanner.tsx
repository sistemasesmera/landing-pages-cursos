import React from "react";
import { Box, Typography } from "@mui/material";

const NailArtPromoBanner: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7c6d9", // Fondo rosa pastel
        padding: { xs: 2, sm: 3, md: 1 },
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
        mt: 2,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          color: "#ffffff", // Letras blancas
          fontWeight: "bold",
          letterSpacing: { xs: 1, sm: 1.5, md: 2 },
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
          textTransform: "uppercase",
        }}
      >
        ¡Llega al Olimpo del Nail Art!
      </Typography>
    </Box>
  );
};

export default NailArtPromoBanner;
