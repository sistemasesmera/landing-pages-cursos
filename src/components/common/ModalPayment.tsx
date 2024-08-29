import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PaymentIcon from "@mui/icons-material/Payment";

// Expresión regular para validar correos electrónicos
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ModalPerfectGelProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  name: string;
  setName: (name: string) => void;
  lastname: string;
  setLastname: (lastname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  comment: string;
  setComment: (comment: string) => void;
  handleCheckout: () => void;
  loading: boolean; // Prop para indicar si está cargando
  error: string; //
}

const ModalPerfectGel: React.FC<ModalPerfectGelProps> = ({
  openModal,
  setOpenModal,
  name,
  setName,
  lastname,
  setLastname,
  email,
  setEmail,
  phone,
  setPhone,
  comment,
  setComment,
  handleCheckout,
  loading,
  error,
}) => {
  // Estado para manejar los errores
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validación del formulario
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validación del nombre
    if (!name) newErrors.name = "El nombre es obligatorio";
    else if (name.length > 40)
      newErrors.name = "El nombre no puede exceder los 40 caracteres";

    // Validación del apellido
    if (lastname.length > 40)
      newErrors.lastname = "El apellido no puede exceder los 40 caracteres";

    // Validación del correo electrónico
    if (!email) newErrors.email = "El correo electrónico es obligatorio";
    else if (email.length > 255)
      newErrors.email =
        "El correo electrónico no puede exceder los 255 caracteres";
    else if (!emailRegex.test(email))
      newErrors.email = "El correo electrónico no es válido";

    // Validación del teléfono
    if (phone) {
      const phoneRegex = /^\d+$/; // Expresión regular para solo números
      if (phone.length < 7 || phone.length > 11) {
        newErrors.phone = "El teléfono debe tener entre 7 y 11 dígitos";
      } else if (!phoneRegex.test(phone)) {
        newErrors.phone = "El teléfono solo debe contener números";
      }
    }

    // Validación del comentario
    if (comment.length > 255)
      newErrors.comment = "El comentario no puede exceder los 255 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = () => {
    if (validateForm()) {
      handleCheckout();
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 800,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: "auto", // Para permitir desplazamiento en pantallas pequeñas
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => setOpenModal(false)}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-title" variant="h6" component="h2">
          Completa tu Reserva
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name && e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      name: "",
                    }));
                  }
                }}
                error={!!errors.name}
                helperText={errors.name}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                fullWidth
                margin="normal"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                  if (errors.lastname && e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      lastname: "",
                    }));
                  }
                }}
                error={!!errors.lastname}
                helperText={errors.lastname}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo electrónico"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email && e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      email: "",
                    }));
                  }
                }}
                error={!!errors.email}
                helperText={errors.email}
                inputProps={{ maxLength: 255 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Teléfono"
                fullWidth
                margin="normal"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone && e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      phone: "",
                    }));
                  }
                }}
                error={!!errors.phone}
                helperText={errors.phone}
                inputProps={{ maxLength: 11, pattern: "\\d*" }} // Solo números permitidos
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comentarios"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  if (errors.comment && e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      comment: "",
                    }));
                  }
                }}
                error={!!errors.comment}
                helperText={errors.comment}
                inputProps={{ maxLength: 255 }}
              />
            </Grid>
          </Grid>

          {/* Renderización del error si existe */}
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mt: 2, textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                padding: "12px 24px",
                minWidth: 200, // Botón más largo
                display: "flex",
                alignItems: "center",
                position: "relative", // Para posicionar el loader
                backgroundColor: "#333", // Negro oscuro
                color: "#fff", // Texto blanco
                "&:hover": {
                  backgroundColor: "#555", // Gris oscuro en hover
                },
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Sombra más prominente
                transition: "all 0.3s ease", // Transición suave
              }}
              disabled={loading} // Desactivar el botón mientras carga
            >
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-12px",
                    marginTop: "-12px",
                  }}
                />
              )}
              <PaymentIcon
                sx={{ mr: 1, visibility: loading ? "hidden" : "visible" }}
              />
              {loading ? "Procesando..." : "Ir a pagar"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPerfectGel;
