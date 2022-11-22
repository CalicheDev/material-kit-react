import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Grid, Button, Container, Stack, Typography, TextField } from '@mui/material';
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
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nueva Cita
          </Button> */}
        </Stack>
        
        {/* <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        {/* <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}
        <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
          <TextField type="date" name="fecha" />
          {/* <Formulario2 /> */}
        </Stack>

        {/* Grid para pintar los card que contienen los datos de disponibiliddad de cada medico
         *fecha y hora del cupo
         */}
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
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Cupos por Médico"
              list={[
                {
                  name: 'Ana Montalvo',
                  value: 20,
                  icon: <Iconify icon={'ant-design:windows-filled'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Carlos Bejarano',
                  value: 15,
                  icon: <Iconify icon={'ant-design:windows-filled'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Juan Fernando',
                  value: 5,
                  icon: <Iconify icon={'ant-design:windows-filled'} color="#006097" width={32} />,
                },
                {
                  name: 'Nathalia Pinillos',
                  value: 10,
                  icon: <Iconify icon={'ant-design:windows-filled'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Horarios Disponibles"
              list={[
                { id: '1', label: '08:00 AM' },
                { id: '2', label: '08:30 AM' },
                { id: '3', label: '09:00 AM' },
                { id: '4', label: '09:30 AM' },
                { id: '5', label: '10:00 AM' },
                { id: '5', label: '10:30 AM' },
                { id: '5', label: '11:00 AM' },
                { id: '5', label: '11:30 AM' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
