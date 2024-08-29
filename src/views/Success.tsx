import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Typography,
  Container,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import api from "../api";

// Definir la interfaz para los datos del cliente
interface CustomerData {
  name: string;
  email: string;
}

const Success: React.FC = () => {
  useDocumentTitle(`Pago Exitoso - Cursos`);

  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegación

  // Obtener el session_id de la URL
  const sessionId = new URLSearchParams(window.location.search).get(
    "session_id"
  );

  // Dentro de tu componente
  useEffect(() => {
    const fetchPaymentSuccess = async () => {
      if (sessionId) {
        try {
          const response = await api.get(`/payments/payment-success`, {
            params: {
              session_id: sessionId,
            },
          });

          const data = response.data;

          if (data.error) {
            setError(data.error);
          } else {
            setCustomerData({
              name: data.name,
              email: data.email,
            });
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            setError("Error fetching payment: " + error.message);
          } else {
            setError("An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
      } else {
        setError("Session ID is missing");
        setLoading(false);
      }
    };

    fetchPaymentSuccess();
  }, [sessionId]);

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="primary" size={60} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={6} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="error" gutterBottom>
            Ocurrió un error
          </Typography>
          <Typography variant="body1" paragraph>
            {error}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
            sx={{ mt: 2 }}
          >
            Volver al inicio
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={6} sx={{ p: 4, textAlign: "center" }}>
          <IconButton sx={{ color: "success.main", mb: 2 }}>
            <CheckCircleIcon fontSize="large" />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            ¡Gracias por tu compra
            {customerData?.name ? `, ${customerData.name}` : ""}!
          </Typography>
          <Typography variant="body1" paragraph>
            Hemos recibido tu pedido y te enviaremos toda la información a{" "}
            <strong>{customerData?.email}</strong>. Si necesitas asistencia
            adicional, no dudes en ponerte en contacto con nosotros a través del
            número o correo electrónico proporcionado.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              mt: 2,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#555",
              },
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            Volver al inicio
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Success;
