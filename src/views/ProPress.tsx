import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SnackbarAlert from "../components/SnackbarAlert";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import perfectGelImage from "../assets/test.jpg"; // Asegúrate de tener esta imagen en la carpeta correcta
import {
  AccessTime,
  AttachMoney,
  CalendarToday,
  LocationOn,
  Badge,
  ArrowRightAlt, // Nuevo ícono
  Redeem,
} from "@mui/icons-material";
import ModalPerfectGel from "../components/common/ModalPayment";
import api from "../api";


// colocar aqui key publica que nos da stripe. 
const stripePromise = loadStripe(
  "pk_test_51PrGVVRu7eeagSsqVHg41HfGFfrOQK2e6T7xtMk4uf2ck4HrZ9BbKhYP8UDRafWvzf20NjF9nVENyMPZDAsoZQyV001fGw0zs7"
);

const ProPress: React.FC = () => {
  useDocumentTitle(`Pro Press - Curso`);

  // Estados para manejar la entrada del usuario
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState(""); // Estado para los comentarios
  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Estados para manejar el Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("error");

  const location = useLocation();

  useEffect(() => {
    const checkTransactionStatus = async () => {
      const queryParams = new URLSearchParams(location.search);
      const sessionId = queryParams.get("session_id");

      if (sessionId) {
        try {
          await api.post("payments/validate-transaction", { sessionId });

          setSnackbarMessage(
            "Se ha cancelado la transacción. Intente nuevamente."
          );
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        } catch (error) {
          console.error("Error al verificar la transacción:", error);
          setSnackbarMessage(
            "¡Ha ocurrido un problema al verificar la transacción. Intente nuevamente realizar el pago!"
          );
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        }
      }
    };

    checkTransactionStatus();
  }, [location.search]);

  const handleCheckout = async () => {
    setLoading(true); // Empieza a cargar

    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe no se ha cargado correctamente.");
      setLoading(false); // Termina de cargar
      return;
    }

    try {
      // Para cambiar el producto de stripe que apunta, cambiar este price id. 
      const checkoutData: any = {
        priceId: "price_1Pt9QWRu7eeagSsqDaVu8IZg",
      };

      if (name) checkoutData.name = name;
      if (lastname) checkoutData.lastname = lastname;
      if (email) checkoutData.email = email;
      if (phone) checkoutData.phone = phone;
      if (comment) checkoutData.comment = comment; // Añadir comentarios si están presentes
      checkoutData.course = "propress";

      const response = await api.post(
        "payments/create-checkout-session",
        checkoutData
      );
      const { sessionId } = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        console.error("Error al redirigir a Stripe:", result.error.message);
      }
    } catch (error) {
      console.error("Error al crear la sesión de checkout:", error);
      setError("Ha ocurrido un error. Por favor, intenta de nuevo");
    } finally {
      setLoading(false); // Termina de cargar en cualquier caso
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Pro Press
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Optimiza tu técnica con Pro Press y aprende a crear uñas duraderas y
        estéticamente perfectas, reduciendo significativamente el tiempo de
        aplicación con resultados de alta calidad.
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Columna de imagen */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <motion.img
              src={perfectGelImage}
              alt="Perfect Gel"
              style={{ maxWidth: "100%", borderRadius: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Box>
        </Grid>
        {/* Columna de información */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Contenedor de detalles y botón */}
            <Box
              sx={{
                mb: 2,
                p: 2,
                backgroundColor: "#ffffff", // Fondo blanco
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra para mejorar contraste
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Encabezado con datos del curso */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", mb: 0.2 }}
                  >
                    <AccessTime sx={{ mr: 1 }} />
                    <span>Duración: 8 Horas</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", mb: 0.2 }}
                  >
                    <AttachMoney sx={{ mr: 1 }} />
                    <span>Precio: € 350</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", mb: 0.2 }}
                  >
                    <CalendarToday sx={{ mr: 1 }} />
                    <span>Fecha del curso: 22 de Septiembre</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 0.2,
                      fontSize: "10px",
                    }}
                  >
                    <LocationOn sx={{ mr: 1 }} />
                    <span>
                      Donde: Paseo Santa Maria De La Cabeza, 10. Madrid
                    </span>
                  </Typography>
                </Grid>
              </Grid>

              {/* Fila inferior con el último detalle y el botón */}
              <Grid container spacing={2} sx={{ mt: 0 }}>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Badge sx={{ mr: 1 }} />
                    <span>Certificado: Sí, al finalizar el curso</span>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#081e49",
                    }}
                  >
                    <Redeem sx={{ mr: 1 }} />
                    <span>Kit de trabajo Pro Press de regalo</span>
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  onClick={() => setOpenModal(true)}
                  variant="outlined"
                  color="primary"
                  sx={{
                    px: 3,
                    py: 1.5,
                    color: "black",
                    borderColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderRadius: 2,
                    "&:hover": {
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      backgroundColor: "transparent",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Reserva tu plaza
                  <ArrowRightAlt sx={{ ml: 1, fontSize: 24 }} />
                </Button>
              </Box>
            </Box>

            {/* Caja de información del curso con scroll */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: 1,
                p: 2, // Aumenté el padding para mejor espaciamiento
                maxHeight: 300, // Ajusta la altura máxima según sea necesario
                backgroundColor: "#f9f9f9", // Fondo gris claro
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Sombra más prominente
                "&::-webkit-scrollbar": {
                  width: 8,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#888",
                  borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              {/* Título del Box */}
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  color: "#081e49",
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Detalles del Curso
              </Typography>

              {/* Fecha de Inicio */}
              <Typography variant="h6" sx={{ color: "#081e49", mb: 1 }}>
                Fecha de Inicio
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                Domingo 22 de septiembre de 2024
              </Typography>

              {/* Horario */}
              <Typography variant="h6" sx={{ color: "#081e49", mb: 1 }}>
                Horario
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                <strong>Curso Completo:</strong> 10:00 AM - 7:00 PM
                <br />
                <strong>Descanso:</strong> 2:00 PM - 3:00 PM
              </Typography>

              {/* Descripción del Curso */}
              <Typography variant="h6" sx={{ color: "#081e49", mb: 1 }}>
                Descripción
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                Domina la técnica avanzada de Pro Press para ofrecer uñas de
                calidad profesional con una mayor durabilidad y belleza. Este
                curso te enseñará desde el manejo preciso de la técnica hasta la
                aplicación final, con un enfoque en la eficiencia para reducir
                el tiempo de trabajo sin comprometer el acabado. Aprenderás
                métodos innovadores para optimizar cada paso del proceso,
                asegurando resultados consistentes y espectaculares.
              </Typography>
              <Typography variant="h6" sx={{ color: "#081e49", mb: 1 }}>
                Temario
              </Typography>
              {/* Temario */}

              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Teoría:</strong>
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Introducción a los conceptos clave y fundamentos de la técnica
                  Pro Press.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>
                    Técnica Dual System (Full Dual, Half Dual) Acrigel:
                  </strong>
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Aprenderás a utilizar el sistema Dual con opciones Full y Half
                  Dual, junto con Acrigel para resultados duraderos y
                  eficientes.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Técnica Híbrida::</strong>
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Combinación de técnicas tradicionales y modernas para
                  optimizar el proceso de aplicación y lograr un acabado
                  perfecto.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Encapsulados:</strong>
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Técnicas para encapsular elementos decorativos en el gel para
                  obtener diseños únicos y personalizados.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Builder Gel:</strong>
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Uso avanzado del Builder Gel para fortalecer y modelar las
                  uñas, proporcionando una base sólida y duradera.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <ModalPerfectGel
        openModal={openModal}
        setOpenModal={setOpenModal}
        name={name}
        setName={setName}
        lastname={lastname}
        setLastname={setLastname}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        handleCheckout={handleCheckout}
        loading={loading}
        comment={comment}
        setComment={setComment}
        error={error}
      />

      <SnackbarAlert
        open={openSnackbar}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
      />
    </Container>
  );
};

export default ProPress;
