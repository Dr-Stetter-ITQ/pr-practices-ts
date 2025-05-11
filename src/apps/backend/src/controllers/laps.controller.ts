import axios from "axios";
import { LapData } from "../models/lapes";

export const get = async (req: any, res: any) => {
    const { driver_number, lap_number } = req.query;
    console.log("hola")

    if (!driver_number || !lap_number) {
        return res.status(200).json({ error: 'Missing query parameters' });
    }

    try {
        const url = `https://api.openf1.org/v1/laps?session_key=9161&driver_number=${driver_number}&lap_number=${lap_number}`
        const response = await axios.get<LapData[]>(url);
        return res.json(response.data);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error fetching OpenF1 car data' });
    }
}