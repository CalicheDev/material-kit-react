import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Typography, TextField, Box } from '@mui/material';
import { LocalizationProvider, StaticDatePicker,esES } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid} from '@mui/x-data-grid';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

/* Parametros para la configuración de columnas para la tabla Profesionales. */
const columns = [
  { field: 'id',headerName: 'Item', width: 150 },
  {
    field: 'firsHours',
    headerName: 'Hora',
    width: 150,
    editable: true,
  },
  
];

/* Array que carga los datos de la tabla profesionales */
const rows = [
  { id: 1, firsHours: '08:00' },
  { id: 2, firsHours: '08:20' },
  { id: 3, firsHours: '08:40' },
  { id: 4, firsHours: '09:00' },
  { id: 5, firsHours: '18:00' },
  
];


export default function Review() {  
  
  const [value, setValue] = React.useState(dayjs());
  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Fecha y Hora
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" >
        <StaticDatePicker
          /* orientation="landscape" */
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
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
