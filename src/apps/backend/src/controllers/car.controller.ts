import axios from 'axios';

interface CarData {
    brake: number;
    date: string;
    driver_number: number;
    drs: number;
    meeting_key: number;
    n_gear: number;
    rpm: number;
    session_key: number;
    speed: number;
    throttle: number;
}

export const getCarData = async (req: any, res: any) => {
    const { driver_number, speed } = req.query;

    if (!driver_number || !speed) {
        return res.status(400).json({ error: 'Missing query parameters' });
    }

    try {
        const url = `https://api.openf1.org/v1/car_data?driver_number=${driver_number}&session_key=9159&speed>=${speed}`
        const response = await axios.get<CarData[]>(url);
        return res.json(response.data);
    } catch (err: any) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error fetching OpenF1 car data' });
    }
};
