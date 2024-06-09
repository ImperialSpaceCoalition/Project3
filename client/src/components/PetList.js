import React, { useState, useEffect } from "react";
import axios from "axios";

function PetList() {
    const [pets, setPets] = useState([]);
    const [newPet, setNewPet] = useState('');
    const [shelterPets, setShelterPets] = useState([]);
    const [zipCode, setZipCode] = useState('');

    useEffect(() => {
        axios.get('/services/petrescueapi')
            .then(response => setPets(response.data))
            .catch(error => console.error(error));
    }, []);

    const fetchShelterPets = async () => {
        try {
          const response = await axios.post(`https://api.rescuegroups.org/v5/public/animals/search`, {
            filters: [
                {
                    fieldName: "animals.status",
                    operation: "equals",
                    criteria: "Available"
                },
                {
                    fieldName: "animals.locationDistance",
                    operation: "radius",
                    criteria: {
                        postalcode: zipCode,
                        distance: 25  // Distance in miles
                    }
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Authorization': '080fSZBT'
            }
        });
            console.log(response.data);
            setShelterPets(response.data.data || []);
        } catch (error) {
            console.error('Error fetching shelter pets:', error);
        }
    };

    const handleAddPet = () => {
        axios.post('/api/pets', { name: newPet })
            .then(response => setPets([...pets, response.data]))
            .catch(error => console.error(error));
    };

    const handleZipCodeSubmit = (event) => {
        event.preventDefault();
        fetchShelterPets();
    };

    return (
        <div>
            <h1>Find Pets Near You</h1>
            <div>
                {pets.map(pet => (
                    <div key={pet._id}>{pet.name}</div>
                ))}
            </div>
            <form onSubmit={handleZipCodeSubmit} style={formStyle}>
                <label>
                    Enter your zip code:
                    <input
                        type="text"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
            <h2>List of Pets Near You</h2>
            <div style={petContainerStyle}>
                {shelterPets.map(pet => (
                    <div key={pet.id} style={petCardStyle}>
                        <h3>{pet.attributes.name}</h3>
                        <p>Breed: {pet.attributes.breedPrimary}</p>
                        {pet.attributes.pictureThumbnailUrl && (
                            <img
                                src={pet.attributes.pictureThumbnailUrl}
                                alt={pet.attributes.name}
                                style={imageStyle}
                            />
                        )}
                        <a href={pet.attributes.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            View More Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

const formStyle = {
    marginBottom: '20px'
};

const inputStyle = {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px'
};

const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer'
};

const petContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
};

const petCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'lightgrey'
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
};

const linkStyle = {
    display: 'block',
    marginTop: '10px',
    color: '#007BFF',
    textDecoration: 'none'
};

export default PetList;



