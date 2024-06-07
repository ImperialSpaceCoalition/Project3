import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAvailablePets } from '../services/petRescueApi';

const AvailablePets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [zip, setZip] = useState('');
    const [dog, setDog] = useState(null);  // New state variable for dog data
    const [cat, setCat] = useState(null);  // New state variable for cat data

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const data = await getAvailablePets(location);
                console.log(data);
                setPets(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching pets', error);
                setLoading(false);
            }
        };

        const fetchDog = async () => {
            const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
                headers: {
                    'x-api-key': 'live_EzvAXVNYHqSOPvpQYSa4CiPewH7B31fqq0fhd5xliXtoyzT753bG7RW24FqqQ0rf'
                }
            });
            setDog(response.data[0]);
        };
        
        const fetchCat = async () => {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                headers: {
                    'x-api-key': 'live_EzvAXVNYHqSOPvpQYSa4CiPewH7B31fqq0fhd5xliXtoyzT753bG7RW24FqqQ0rf'
                }
            });
            setCat(response.data[0]);
        };

        if (location) {
            fetchPets();
        }

        fetchDog();
        fetchCat();
    }, [location]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
            <button onClick={() => setLocation(zip)}>Search</button>
            
        
            {dog && (
                <div>
                    <h2>Random Dog</h2>
                    <img src={dog.url} alt="Random Dog" style={{ width: '500px', height: 'auto' }} />
                    {dog.breeds && dog.breeds[0] && <p>Breed: {dog.breeds[0].name}</p>}
                </div>
            )}

            {cat && (
                <div>
                    <h2>Random Cat</h2>
                    <img src={cat.url} alt="Random Cat" style={{ width: '500px', height: 'auto' }} />
                </div>
            )}

            <h2>Available pets in {location}</h2>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <h3>{pet.name}</h3>
                        <p>{pet.breed}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvailablePets;