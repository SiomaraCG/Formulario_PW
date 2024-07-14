import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  return (
    <Box className="form-container">
      <h2>FORMULARIO DE REGISTRO</h2>
      <Box mt={2}>
        <TextField label="Nombres" color="secondary" fullWidth />
      </Box>
      <Box mt={2}>
        <TextField label="Apellidos" color="secondary" fullWidth />
      </Box>
      <Box mt={2}>
        <TextField label="Teléfono" color="secondary" fullWidth />
      </Box>
      <Box mt={2}>
        <TextField label="Dirección" color="secondary" fullWidth />
      </Box>
      <Box mt={2}>
        <TextField label="Email" color="secondary" fullWidth />
      </Box>
      <Box mt={2}>
        <TextField
          label="Fecha de Nacimiento"
          color="secondary"
          type="date"
          defaultValue="2024-07-14"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Box>
      <Box mt={2}>
        <TextField
          label="Género"
          color="secondary"
          select
          SelectProps={{ native: true }}
          fullWidth
        >
          <option value=""></option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </TextField>
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="secondary">
          Registrarse
        </Button>
      </Box>
    </Box>
  );
}

export default App;
