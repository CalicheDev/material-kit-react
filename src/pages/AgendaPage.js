import React from 'react';
/* import { Calendar, TimePicker } from 'antd'; */
import { Helmet } from 'react-helmet-async';

// @mui
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  CssBaseline,
  AppBar,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Link  
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// components
import AddressForm from '../components/citas/AddressForm';
import PaymentForm from '../components/citas/PaymentForm';
import Review from '../components/citas/Review';
/* import { Fragment } from 'react'; */
/* import Iconify from '../components/iconify'; */
/* import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog'; */
// mock
/* import POSTS from '../_mock/blog'; */

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

/* Función que se encarga de mostrar el año actual como el año de copyright en el pie de página. */
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* Variable steps almacena una matriz con los títulos de los pasos para reservar una cita. */
const steps = ['Verifique sus Datos', 'Seleccione un Profesional', 'Seleccione Fecha y Hora'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

/* Componente principal, Checkout, utiliza el hook de estado useState para mantener el estado del paso activo
 y manejar la navegación entre los pasos. También tiene una función handleClick para navegar a una ruta específica. */
export default function Checkout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard/perfil', { replace: true });
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Helmet>
        <title> Cita | Agenda </title>
      </Helmet>
      <Container>
        
          
            {/* <Typography variant="h6" color="inherit" noWrap> */}
            <Typography variant="h4" sx={{ mb: 5 }}>
              Administrador de citas
            </Typography>
          
        
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Agende su Cita
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Cita Asignada!
                </Typography>
                <Typography variant="subtitle1">
                  Su cita ha sido programada para el día xx/xxx/xxx con el Dr. Carlos Bejarano. Por favor, recuerde la
                  fecha de su cita y llegue 15 minutos antes de la hora programada para completar los trámites
                  administrativos y la admisión correspondiente.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atrás
                    </Button>
                  )}
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Siguiente'}
                  </Button>
                  <Button variant="outlined" onClick={handleClick} sx={{ mt: 3, ml: 1 }}>Editar </Button>
                </Box>
              </>
            )}
          </Paper>
          <Copyright />
        </Container>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------
