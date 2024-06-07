import axios from 'axios';

const BASE_URL = 'https://api.rescuegroups.org/v5/public/animals';

export const getAvailablePets = async (location) => { 
    const response = await axios.get(BASE_URL, {
        params: {
            location,
            status: 'Available',
            limit: 20,
        },
    });
    return response.data.data;
};

