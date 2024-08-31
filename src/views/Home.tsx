import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AccessTime,
  CalendarToday,
  Badge,
  InfoOutlined,
} from "@mui/icons-material";
import perfectGelImage from "../assets/perfect-gel.webp";
import proPressImage from "../assets/pro-press.webp";
import useDocumentTitle from "../hooks/useDocumentTitle";

const cardVariants = {
  hover: { 
    backgroundColor: "#f5f5f5", 
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" 
  },
  initial: {
    backgroundColor: "#ffffff", // Fondo blanco por defecto
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
  }
};

const Home: React.FC = () => {
  useDocumentTitle("Inicio - Cursos de uñas");

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Typography
        variant="h4"
        align="center"
        paragraph
        sx={{
          color: "#081e49",
          fontWeight: "bold",
          mb: 6,
        }}
      >
        ¿Apasionada por las uñas?
        <br /> Nuestros cursos te llevarán al siguiente nivel
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container spacing={6} justifyContent="center">
          {/* Ajusta el ancho de las tarjetas en pantallas grandes */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4} justifyContent="center">
              {/* Tarjeta para Perfect Gel */}
              <Grid item xs={12} sm={6}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                      width: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="Perfect Gel"
                      height="220"
                      image={perfectGelImage}
                      sx={{ width: "100%", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#081e49",
                          fontWeight: "bold",
                        }}
                      >
                        Perfect Gel
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box display="flex" alignItems="center" mb={1}>
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Duración:</strong> 8 Horas
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <CalendarToday sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Fecha del curso:</strong> 15 de Septiembre
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Badge sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Certificado:</strong> Sí, al finalizar el curso
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <Button
                          component={Link}
                          to="/perfectgel"
                          variant="outlined"
                          color="primary"
                          sx={{
                            px: 4,
                            py: 1.5,
                            borderColor: "black",
                            color: "white",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black",
                            "&:hover": {
                              borderColor: "#042564",
                              backgroundColor: "#042564",
                              color: "#87a9ea",
                              transition: "all 0.3s ease",
                              boxShadow: "0px 4px 15px rgba(135, 169, 234, 0.5)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Más Información
                          <InfoOutlined sx={{ ml: 1, fontSize: 20 }} />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Tarjeta para Pro Press */}
              <Grid item xs={12} sm={6}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="initial"
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                      width: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="Pro Press"
                      height="220"
                      image={proPressImage}
                      sx={{ width: "100%", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#081e49",
                          fontWeight: "bold",
                        }}
                      >
                        Pro Press
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box display="flex" alignItems="center" mb={1}>
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Duración:</strong> 8 Horas
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={1}>
                        <CalendarToday sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Fecha del curso:</strong> 22 de Septiembre
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Badge sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          <strong>Certificado:</strong> Sí, al finalizar el curso
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <Button
                          component={Link}
                          to="/propress"
                          variant="outlined"
                          color="primary"
                          sx={{
                            px: 4,
                            py: 1.5,
                            borderColor: "black",
                            color: "white",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black",
                            "&:hover": {
                              borderColor: "#042564",
                              backgroundColor: "#042564",
                              color: "#87a9ea",
                              transition: "all 0.3s ease",
                              boxShadow: "0px 4px 15px rgba(135, 169, 234, 0.5)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Más Información
                          <InfoOutlined sx={{ ml: 1, fontSize: 20 }} />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
