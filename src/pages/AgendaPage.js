import React from 'react';
/* import { Calendar, TimePicker } from 'antd'; */
import { Helmet } from 'react-helmet-async';

// @mui
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
  Link,
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

export default function Checkout() {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Administrador de citas
            </Typography>
          </Toolbar>
        </AppBar>
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
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will send you an update
                  when your order has shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
}

// ----------------------------------------------------------------------

/* export default function AgendaPage() {
  const medicos = [
    { value: '1', label: 'Dr. Juan Pérez', especialidad: 'Cardiología' },
    { value: '2', label: 'Dra. Maria González', especialidad: 'Dermatología' },
    { value: '3', label: 'Dr. Luis Fernández', especialidad: 'Oftalmología' },
    { value: '4', label: 'Dra. Ana López', especialidad: 'Pediatría' },
    { value: '5', label: 'Dr. Pedro Martínez', especialidad: 'Traumatología' },
  ];
  const [appointment, setAppointment] = useState({});

  const AddAppointment = () => {
    const handleDateChange = (date) => {
      setAppointment({ ...appointment, date });
    };

    const handleTimeChange = (time) => {
      setAppointment({ ...appointment, time });
    };

    const handleInputChange = (e) => {
      setAppointment({ ...appointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(appointment);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Calendar onChange={handleDateChange} />
        <TimePicker onChange={handleTimeChange} />
        <Button type="submit">Submit</Button>
        <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
          <TextField disabled type="text" name="name" placeholder="Name"  />
          <TextField disabled type="text" name="direccion" placeholder="Direccion" />
          <Typography variant="h6" sx={{ mb: 4 }}>
            Nombres:{' '}
          </Typography>
          <TextField disabled type="text" name="nombre" label="Nombres" />
        </Stack>
        
      </form>
    );
  };

  return (
    <>
      <Helmet>
        <title> Cita | Agenda </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h4" gutterBottom>
            Administrador de citas
          </Typography>
        </Stack>

        <Grid item xs={12} md={6} lg={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Medico"
            helperText="Seleccione un Medico"
            variant="outlined"
          >
            {medicos.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} - {option.especialidad}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <AddAppointment />
        

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks
              title="Seleccione una especialidad"
              list={[
                { id: '1', label: 'CONSULTA EXTERNA' },
                { id: '2', label: 'CONSULTA PALIATIVO' },
                { id: '3', label: 'PSIQUIATRÍA' },
                { id: '4', label: 'NUTRICIÓN' },
                { id: '5', label: 'ORTOPEDIA Y TRAUMATOLOGÍA' },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTasks
              title="Seleccione un Procedimiento"
              list={[
                { id: '1', label: 'Cirugía' },
                { id: '2', label: 'Terapia' },
                { id: '3', label: 'Radiología' },
                { id: '4', label: 'Estudios de laboratorio' },
                { id: '5', label: 'Consulta' },
              ]}
              
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
} */
