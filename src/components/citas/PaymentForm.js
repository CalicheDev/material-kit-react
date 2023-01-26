import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';
// Libreria para hacer una petición a una API
/* import axios from 'axios'; */

/* Parametros para la configuración de columnas para la tabla Profesionales. */
const columns = [
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

/* Array que carga los datos de la tabla profesionales */
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

/* Codigo para conectarse a una API y realizar una peticion HTTP usando el metodo GET
 *y también utiliza un hook de React llamado 'useEffect' para cargar los datos de la API en el estado de la aplicación. */
/* const [rows, setRows] = useState([]);
const [rows, setRows] = useState([]);

useEffect(() => {
  axios.get('https://ejemplo.com/api/profesionales')
    .then(res => {
        setRows(res.data);
    })
    .catch(error => {
        console.log(error);
    });
}, []); */

/* Componente principal para mostrar el formulario con los datos de los profesionales con disponibilidad de citas */
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
