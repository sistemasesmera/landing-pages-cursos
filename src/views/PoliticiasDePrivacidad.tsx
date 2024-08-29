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
import politicasPdf from "/docs/politicas-de-privacidad.pdf";
import { Print } from "@mui/icons-material";
import useDocumentTitle from "../hooks/useDocumentTitle";

const PoliticasDePrivacidad: React.FC = () => {
  useDocumentTitle(`Politicas de privacidad`);

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
          Políticas de Privacidad
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={politicasPdf}
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
        <Typography variant="body1" paragraph>
          El titular le informa sobre su Política de Privacidad con respecto al
          tratamiento y protección de los datos personales de los usuarios y
          clientes que puedan ser recopilados durante la navegación, al
          inscribirse o al utilizar los servicios ofrecidos a través del sitio
          web de Esmera School.
        </Typography>
        <Typography variant="body1" paragraph>
          En este sentido, Esmera School garantiza el cumplimiento de la
          normativa vigente en materia de protección de datos personales,
          reflejada en la legislación aplicable, incluyendo la Ley Orgánica de
          Protección de Datos Personales y Garantía de Derechos Digitales (LOPD
          GDD) y el Reglamento General de Protección de Datos (RGPD) de la Unión
          Europea.
        </Typography>
        <Typography variant="body1" paragraph>
          El uso del sitio web implica la aceptación de esta Política de
          Privacidad, así como de las condiciones incluidas en el Aviso Legal.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Principios aplicados en el tratamiento de datos
      </Typography>
      <Typography variant="body1" paragraph>
        En el tratamiento de los datos personales, Esmera School aplicará los
        siguientes principios, en línea con las disposiciones del RGPD:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Principio de licitud, lealtad y transparencia:</strong>{" "}
            Siempre se requerirá el consentimiento para el tratamiento de los
            datos personales, informando al usuario de manera clara y
            transparente sobre los fines específicos del tratamiento.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Principio de minimización de datos:</strong> Se solicitarán
            únicamente los datos estrictamente necesarios para los fines para
            los cuales son recopilados.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Principio de limitación del plazo de conservación:</strong>{" "}
            Los datos personales se conservarán durante el tiempo estrictamente
            necesario para los fines del tratamiento, informando al usuario
            sobre el plazo de conservación correspondiente.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Principio de integridad y confidencialidad:</strong> Se
            garantizará la seguridad, confidencialidad e integridad de los datos
            personales recopilados, tomando las medidas necesarias para evitar
            accesos no autorizados o usos indebidos por parte de terceros.
          </Typography>
        </li>
      </ul>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Obtención de datos personales
      </Typography>
      <Typography variant="body1" paragraph>
        Para acceder al sitio web de Esmera School, no es necesario proporcionar
        ningún dato personal.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Derechos
      </Typography>
      <Typography variant="body1" paragraph>
        Esmera School informa que los usuarios tienen derecho a:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" paragraph>
            Solicitar acceso a los datos almacenados.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Solicitar la rectificación o supresión de los datos.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Solicitar la limitación del tratamiento.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Oponerse al tratamiento de los datos.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        El ejercicio de estos derechos debe realizarse enviando una solicitud
        directamente al titular a través de la siguiente dirección de correo
        electrónico:{" "}
        <a href="mailto:admin@esmeraschool.comm">admin@esmeraschool.com</a>.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Finalidad del tratamiento de datos personales
      </Typography>
      <Typography variant="body1" paragraph>
        Cuando un usuario se conecta al sitio web de Esmera School, se inscribe en
        nuestros servicios o realiza una compra, está proporcionando información
        personal que será tratada por Esmera School. Esta información puede incluir
        datos como nombre, dirección de correo electrónico, número de teléfono,
        entre otros. Al proporcionar esta información, el usuario consiente su
        recopilación, uso y gestión de acuerdo con lo establecido en nuestra
        Política de Privacidad.
      </Typography>
      <Typography variant="body1" paragraph>
        Los datos personales son tratados con diferentes finalidades,
        incluyendo:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" paragraph>
            Mantener una relación comercial con el usuario.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Prestar los servicios contratados.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Facturación y cobro de los productos o servicios contratados.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            Cumplir con las obligaciones legales y condiciones establecidas en
            el Aviso Legal.
          </Typography>
        </li>
      </ul>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Seguridad de los datos personales
      </Typography>
      <Typography variant="body1" paragraph>
        Esmera School toma todas las precauciones razonables y sigue las mejores
        prácticas de la industria para proteger los datos personales de los
        usuarios, evitando su pérdida, mal uso, acceso no autorizado,
        divulgación, alteración o destrucción.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Contenido de otros sitios web
      </Typography>
      <Typography variant="body1" paragraph>
        El sitio web de Esmera School puede incluir contenido incrustado de otros
        sitios web. Este contenido se comporta de la misma manera que si el
        usuario hubiera visitado directamente el otro sitio web. Es importante
        tener en cuenta que estos sitios web pueden recopilar datos sobre el
        usuario, utilizar cookies y realizar un seguimiento de su interacción
        con el contenido incrustado, de acuerdo con sus propias políticas de
        privacidad.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Legitimación para el tratamiento de datos
      </Typography>
      <Typography variant="body1" paragraph>
        La base legal para el tratamiento de los datos personales es el
        consentimiento del usuario, la ejecución de un contrato o la aplicación
        de medidas precontractuales, y el cumplimiento de obligaciones legales.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Conservación de datos personales
      </Typography>
      <Typography variant="body1" paragraph>
        Los datos personales proporcionados a Esmera School se conservarán hasta que
        el usuario solicite su supresión.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Navegación web
      </Typography>
      <Typography variant="body1" paragraph>
        Al navegar por el sitio web de Esmera School, se pueden recoger datos no
        identificativos, como la dirección IP, la geolocalización y otros datos
        que no pueden ser utilizados para identificar al usuario. Estos datos se
        utilizan con fines estadísticos y de análisis para mejorar nuestros
        servicios.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Exactitud y veracidad de los datos personales
      </Typography>
      <Typography variant="body1" paragraph>
        El usuario se compromete a proporcionar datos personales correctos,
        completos y actualizados, siendo el único responsable de la veracidad y
        corrección de los datos proporcionados.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Aceptación y consentimiento
      </Typography>
      <Typography variant="body1" paragraph>
        Al utilizar el sitio web de Esmera School, el usuario declara haber sido
        informado de las condiciones sobre protección de datos personales y
        acepta el tratamiento de sus datos por parte de Esmera School en la forma y
        para las finalidades indicadas en esta Política de Privacidad.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        Cambios en la Política de Privacidad
      </Typography>
      <Typography variant="body1" paragraph>
        Esmera School se reserva el derecho a modificar esta Política de Privacidad
        para adaptarla a cambios legislativos o jurisprudenciales, así como a
        prácticas de la industria. Los cambios serán publicados en esta página y
        estarán vigentes a partir de su publicación.
      </Typography>

      <Typography variant="body1" paragraph align="right">
        Fecha de última actualización: 24/07/2024
      </Typography>
    </Container>
  );
};

export default PoliticasDePrivacidad;
