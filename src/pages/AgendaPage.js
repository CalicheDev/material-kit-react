import React, { useState } from 'react';
import { Calendar, TimePicker } from 'antd';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Button, Container, Stack, Typography, TextField, MenuItem } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
import Formulario2 from '../components/citas/Formulario2';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AgendaPage() {
  const medicos = [
    { value: '1', label: 'Dr. Juan Pérez', especialidad: 'Cardiología' },
    { value: '2', label: 'Dra. Maria González', especialidad: 'Dermatología' },
    { value: '3', label: 'Dr. Luis Fernández', especialidad: 'Oftalmología' },
    { value: '4', label: 'Dra. Ana López', especialidad: 'Pediatría' },
    { value: '5', label: 'Dr. Pedro Martínez', especialidad: 'Traumatología' },
  ];
  const [appointment, setAppointment] = useState({});
  
  /* const ShowAddAppointment = ({ selectedMedico }) => {
    if (selectedMedico) {
    return <AddAppointment />;
    } else {
    return <p>Por favor seleccione un médico para continuar</p>;
    }
    };
    
    const handleMedicoChange = (e) => {
    setSelectedMedico(e.target.value);
    };
    
    const [selectedMedico, setSelectedMedico] = useState(null); */



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
          <TextField type="text" name="name" placeholder="Name" onChange={handleInputChange} />
          <TextField type="text" name="reason" placeholder="Reason for appointment" onChange={handleInputChange} />
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
        {/* <ShowAddAppointment /> */}

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
              /* multiple={true} */
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
