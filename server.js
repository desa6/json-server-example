const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/consulta', (req, res) => {
  const { IdEmpresa, Id_Letra } = req.body;
  const response = `[{"ID_Letra":${Id_Letra},"NroLetra":"27705-001-00","ID_Estado":376.0,"EstadoNombre":"StandBy","NroCuota":1.0,"ID_Financiamiento":127705.0,"ID_Aceptante":"15405543","AceptanteNombre":"HUAMAN MANCO, ANTONIO FERMIN","Importe":1240.9600,"Emision":"2023-10-17T00:00:00","Vcmto":"2024-02-13T00:00:00"}]`;
  res.send({ value: response });
});

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
