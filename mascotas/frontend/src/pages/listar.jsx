import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import bgBlue from '../assets/bg.svg';
import bgClose from '../assets/btn-close.svg';
import bgAdd from '../assets/btn-add.svg';
import btn_show from '../assets/btn-show.svg';
import btn_edit from '../assets/btn-edit.svg';
import btn_delete from '../assets/btn-delete.svg';
import '../components/.css'


function Listar() {
    const { id_mascota } = useParams();
    const [pets, setPets] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const getURL = 'http://localhost:3000/listarMascota2';
                const response = await axios.get(getURL, {
                    headers: {
                        token: token
                    }
                });
                console.log(response.data);
                setPets(response.data);
            } catch (error) {
                console.log('Error en el servidor ' + error);
            }
        };

        fetchPets();
    }, [token]);

    const handleDelete = async (id_mascota) => {
        try {
            const deleteURL = `http://localhost:3000/desactivarMascota/${id_mascota}`;
            const response = await axios.delete(deleteURL, {
                headers: {
                    token: token
                }
            });
            console.log(response.data);
            // Actualizar la lista de mascotas después de eliminar una
            const updatedPets = pets.filter(pet => pet.id_mascota !== id_mascota);
            setPets(updatedPets);
        } catch (error) {
            console.log('Error al eliminar la mascota ' + error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen' style={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', paddingBottom: '10vh' }}>
            <div className="flex items-center justify-center w-full max-w-screen-lg mt-4 px-5 sticky top-0 bg-transparent z-5">
                <div className="flex items-center justify-center space-x-2 w-full">
                    <h1 className='text-gray-50 text-xl font-normal' style={{marginTop: '50px', marginLeft:'40px'}}>Administrar Mascotas</h1>
                    <div className="ml-auto">
                        <Link to="/">
                            <img src={bgClose} style={{marginTop:'50px', marginLeft:'30px'}} alt="Close" className="cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-3 sticky top-16 z-10 bg-transparent">
                <Link to="/Registrar">
                    <img src={bgAdd} alt="Add" className="cursor-pointer" />
                </Link>
            </div>

            <div className="mt-6 space-y-3 px-5 flex-grow overflow-y-auto hide-scrollbar" style={{ width: '400px', maxHeight: '70vh' }}>
                {pets.map((pet, index) => {
                    const imageUrl = `http://localhost:3000/img/${pet.foto}`;
                    console.log(`Pet ${index + 1} photo URL: ${imageUrl}`);
                    return (
                        <div key={index} className="w-full p-4 rounded-3xl flex items-center bg-gray-300">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
    <img src={`http://localhost:3000/img/${pet.foto}`} alt={`Picture ${index + 1}`} className="w-full h-full object-cover ml-[-1px]" />
</div>

                            <div className="flex flex-grow items-center justify-between ml-4">
                                <div>
                                    <h3 className='text-blue-800'>{pet.name}</h3>
                                    <p className='text-gray-400'>{pet.raza}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link to={`/Buscar/${pet.id_mascota}`}>
                                        <img src={btn_show} alt="Show" className="cursor-pointer" />
                                    </Link>
                                    <Link to={`/Actualizar/${pet.id_mascota}`}>
                                        <img src={btn_edit} alt="Edit" className="cursor-pointer" />
                                    </Link>
                                    <img src={btn_delete} alt="Delete" className="cursor-pointer" onClick={() => handleDelete(pet.id_mascota)} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Listar;