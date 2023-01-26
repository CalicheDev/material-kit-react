import React from 'react';
import {Grid,Typography,TextField,FormControlLabel,Checkbox} from '@mui/material';

/* Componente principal para mostrar el formulario con los datos básicos del paciente */
export default function AddressForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Información Básica
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="firstName"
            name="firstName"
            label="Nombres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="lastName"
            name="lastName"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            id="address1"
            name="address1"
            label="Dirección"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>        
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>        
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="phone"
            name="phone"
            label="Telefono"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Sí los datos estan correctos marque esta opción"
          />
        </Grid>
      </Grid>
    </>
  );
}