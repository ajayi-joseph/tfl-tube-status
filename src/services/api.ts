import axios from 'axios';
import { TubeLine } from '../types/tube.types';


const API_BASE_URL = process.env.REACT_APP_TFL_API_URL;
const APP_ID = process.env.REACT_APP_TFL_APP_ID || '';
const API_KEY = process.env.REACT_APP_TFL_API_KEY || '';

if (!API_BASE_URL) {
  throw new Error(
    'Missing environment variables: Please set REACT_APP_TFL_API_URL in your .env file.'
  );
}

export const fetchTubeStatus = async (): Promise<TubeLine[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Line/Mode/Tube/Status`,
      {
        params: {
          app_id: APP_ID ,
          app_key: API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching tube status:', error);
    throw error;
  }
};