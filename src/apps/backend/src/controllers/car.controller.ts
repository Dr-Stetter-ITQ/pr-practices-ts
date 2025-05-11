import axios from 'axios';
import { CarData } from './carData';

export const getCarData = async (req: any, res: any) => {
    const { driver_number, speed } = req.query;

    if (!driver_number || !speed) {
        return res.status(404).json({ error: 'error' });
    }
    

    try {
        const u = `https://api.openf1.org/v1/car_data?driver_number=${driver_number}&session_key=9159&speed>=${speed}`
        const r = await axios.get<CarData[]>(u);
        return res.json(r.data);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error fetching OpenF1 car data' });
    }
};
