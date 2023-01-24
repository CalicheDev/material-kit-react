import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Typography,Box} from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Codigo', width: 90 },
  {
    field: 'firstName',
    headerName: 'Profesional',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Especialidad',
    width: 150,
    editable: true,
  },
  
  /* {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Esta columna no es ordenable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }, */
];

const rows = [
  { id: 1, lastName: 'Dolor', firstName: 'Nathalia Pinillos' },
  { id: 2, lastName: 'Dolor', firstName: 'Lucila' },
  { id: 3, lastName: 'Dolor', firstName: 'Juan Fernando' },
  { id: 4, lastName: 'Dolor', firstName: 'Santiago' },
  { id: 5, lastName: 'Paliativos', firstName: 'Alejandra Saldarriaga' },
  { id: 6, lastName: 'Paliativos', firstName: 'Ana Montalvo' },
  { id: 7, lastName: 'Paliativos', firstName: 'Ferrara' },
  { id: 8, lastName: 'Paliativos', firstName: 'Rossini' },
  { id: 9, lastName: 'Paliativos', firstName: 'Harvey' },
];

export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Profesionales y Especialidades
      </Typography>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </>
  );
}