
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Layout from '../components/Layout';

const base_url = 'http://guidestarindia.momsuat.com/'; 

const loginUser = async (credentials) => {
    const { data } = await axios.post(`${base_url}api/method/guidestar.api.user.login`, credentials);
    return data;
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation(loginUser, {
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem('token', data.token); 
                navigate('/states'); 
            } else {
                setError('Login failed. No token received.');
            }
        },
        onError: (error) => {
            setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ username, password });
    };

    return (
        <Layout>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={mutation.isLoading}>
                    {mutation.isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </Layout>
    );
};

export default Login;
