import axios from "axios";

interface Driver {
    broadcast_name: string;
    country_code: string;
    driver_number: number;
    first_name: string;
    full_name: string;
    headshot_url: string;
    last_name: string;
    meeting_key: number;
    name_acronym: string;
    session_key: number;
    team_colour: string;
    team_name: string;
}


export const getDrivers = async (_req: any, res: any) => {
    try {
        const response = await axios.get<Driver[]>('https://api.openf1.org/v1/drivers');
        const limitedDrivers = response.data.slice(0, 9);
        res.json(limitedDrivers);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).json({ error: 'Error fetching OpenF1 driver data' });
    }
};