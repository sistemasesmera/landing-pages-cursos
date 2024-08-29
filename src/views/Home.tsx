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
import perfectGelImage from "../assets/test.jpg"; // Asegúrate de tener estas imágenes en la carpeta correcta
import proPressImage from "../assets/test.jpg"; // Asegúrate de tener estas imágenes en la carpeta correcta
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home: React.FC = () => {
  useDocumentTitle("Inicio - Cursos de uñas");

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography
        variant="h4"
        align="center"
        paragraph
        sx={{
          color: "#081e49",
          fontWeight: "bold",
        }}
      >
        Aprende con los mejores en el campo del cuidado de uñas.
        <br /> Explora nuestros cursos y mejora tus habilidades profesionales
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Tarjeta para Perfect Gel */}
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardMedia
                component="img"
                alt="Perfect Gel"
                height="200"
                image={perfectGelImage}
                sx={{ width: "100%" }}
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
                      px: 3,
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
                        borderColor: "#042564", // Color de borde en hover
                        backgroundColor: "042564",
                        color: "#87a9ea", // Color del texto en hover
                        transition: "all 0.3s ease", // Transición suave
                        boxShadow: "0px 4px 15px rgba(135, 169, 234, 0.5)", // Sombra en hover
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
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardMedia
                component="img"
                alt="Pro Press"
                height="200"
                image={proPressImage}
                sx={{ width: "100%" }}
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
                  {" "}
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
                      px: 3,
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
                        borderColor: "#042564", // Color de borde en hover
                        backgroundColor: "042564",
                        color: "#87a9ea", // Color del texto en hover
                        transition: "all 0.3s ease", // Transición suave
                        boxShadow: "0px 4px 15px rgba(135, 169, 234, 0.5)", // Sombra en hover
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
    </Container>
  );
};

export default Home;
