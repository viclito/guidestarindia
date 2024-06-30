import React, { useState } from 'react'
import Layout from '../../components/Layout'

import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [organization, setOrganization] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
      };
  return (
    <Layout>
        <div className="register">
            <div className="inner">
                
                <div className="left"></div>
                <div className="right">
                    <h1>Register Page</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <label>First Name</label>
                            <div className="input">
                                <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Last Name</label>
                            <div className="input">
                                <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Email</label>
                            <div className="input">
                                <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Password</label>
                            <div className="input">
                                <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Confirm Password</label>
                            <div className="input">
                                <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Title</label>
                            <div className="input">
                                <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inputs">
                            <label>Organization name</label>
                            <div className="input">
                                <input
                                type="text"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">
                            Register
                        </button>
                        <Link to='/login'>
                            <h5>Already have an account <span color="#4472C4">Login Now</span></h5>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Register