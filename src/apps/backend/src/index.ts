import express from "express";
import cors from "cors";
import driverRoutes from './routes/driver.routes';
import carRoutes from './routes/car.routes';

// Usar las rutas



const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/drivers', driverRoutes);
app.use('/v1/car-data', carRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
