// src/pages/PrivacyPolicy.tsx

import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import terminosPdf from "/docs/terminos-y-condiciones.pdf";
import { Print } from "@mui/icons-material";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TerminosDelServicio: React.FC = () => {
  useDocumentTitle(`Terminos del servicio`);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ mb: { xs: 2, sm: 0 } }}
        >
          Términos y Condiciones
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={terminosPdf}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: { xs: 2, sm: 0 } }}
        >
          Versión para imprimir
          <IconButton
            edge="start"
            color="inherit"
            aria-label="print"
            sx={{ marginLeft: 1 }}
            size="small"
          >
            <Print />
          </IconButton>
        </Button>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Introducción
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenido a Esmera School. Al acceder o utilizar nuestro sitio web y
          servicios, usted acepta cumplir con los siguientes términos y
          condiciones. Si no está de acuerdo con alguna de estas condiciones,
          por favor no utilice nuestro sitio web.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Servicios
        </Typography>
        <Typography variant="body1" paragraph>
          Esmera School es una plataforma en línea dedicada a la venta de cursos
          educativos presenciales. A través de nuestro sitio web, los usuarios
          pueden:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              Explorar y adquirir cursos en diversas áreas de conocimiento.
            </Typography>
          </li>

          <li>
            <Typography variant="body1" paragraph>
              Contactar a nuestro equipo para consultas, soporte y asistencia
              técnica.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          Nos reservamos el derecho de añadir, modificar o descontinuar nuestros
          cursos en cualquier momento sin previo aviso.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Uso del Sitio Web
        </Typography>
        <Typography variant="body1" paragraph>
          Usted se compromete a utilizar el sitio web de Esmera School de manera
          legal y conforme a estos términos. No debe utilizar el sitio web para
          fines ilegales o prohibidos por estos términos.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Propiedad Intelectual
        </Typography>
        <Typography variant="body1" paragraph>
          Todo el contenido y material disponible en el sitio web de Esmera
          School, incluyendo textos, gráficos, videos, logotipos y software,
          están protegidos por derechos de propiedad intelectual y son propiedad
          exclusiva de Esmera School o de terceros licenciantes.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Responsabilidad
        </Typography>
        <Typography variant="body1" paragraph>
          Esmera School no será responsable por ningún daño o perjuicio que
          surja del uso del sitio web, incluyendo, pero no limitado a, daños
          directos, indirectos, incidentales o consecuenciales. El uso del sitio
          web y de los cursos es bajo su propio riesgo.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Enlaces a Terceros
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestro sitio web puede contener enlaces a sitios web de terceros.
          Estos enlaces se proporcionan solo para su conveniencia y no implican
          aprobación o responsabilidad por parte de Esmera School sobre el
          contenido de dichos sitios.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Modificaciones
        </Typography>
        <Typography variant="body1" paragraph>
          Esmera School se reserva el derecho de modificar estos términos y
          condiciones en cualquier momento. Los cambios se publicarán en esta
          página y entrarán en vigor a partir de su publicación.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Legislación Aplicable
        </Typography>
        <Typography variant="body1" paragraph>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con
          las leyes de España. Cualquier disputa que surja en relación con estos
          términos será resuelta en los tribunales competentes de Madrid.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" paragraph>
          Si tiene alguna pregunta sobre estos términos y condiciones, puede
          contactarnos a través de la siguiente dirección de correo electrónico:{" "}
          <a href="mailto:admin@esmeraschool.com">admin@esmeraschool.com</a>.
        </Typography>
      </Box>

      <Typography variant="body1" paragraph align="right">
        Fecha de última actualización: 08/08/2024
      </Typography>
    </Container>
  );
};

export default TerminosDelServicio;
