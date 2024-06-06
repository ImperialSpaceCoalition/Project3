import React, { useState, useEffect } from "react";
import axios from "axios";

function PetList() {
    const [pets, setPets] = useState([]);
    const [newPet, setNewPet] = useState('');

    useEffect(() => {
        axios.get('api/pets')
            .then(response => setPets(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddPet = () => {
        axios.post('api/pets', { name: newPet })
            .then(response => setPets([...pets, response.data]))
            .catch(error => console.error(error));
    };


  return (
    <div>
      <h1>List of Pets</h1>
      {pets.map(pet => (
        <div key={pet._id}>{pet.name}</div>
        ))}
        <input type="text" value={newPet} onChange={e => setNewPet(e.target.value)} />
        <button onClick={handleAddPet}>Add Pet</button>
    </div>
  );
}

export default PetList;