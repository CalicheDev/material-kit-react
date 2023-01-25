import * as React from 'react';
import dayjs from 'dayjs';
import { Typography, TextField } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


export default function Review() {  
  
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Fecha y Hora
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} locale={'es'}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
}
