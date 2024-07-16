import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const base_url = 'http://guidestarindia.momsuat.com/'; 

const fetchStates = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    const { data } = await axios.get(`${base_url}api/method/guidestar.api.npo_registration.get_states`, {
        headers: {
            'Authorization': token,
            // 'Content-Type': 'application/json'

        },
    });
    return data.documents;
    
};

const StatesList = () => {
    const { data, error, isLoading } = useQuery('states', fetchStates);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    

    return (
        <div>
            <h2>States</h2>
            <ul>
                {data.map((state) => (
                    <li key={state.id}>{state.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StatesList;




