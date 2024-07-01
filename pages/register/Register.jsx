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
    const [country, setCountry] = useState('')
    const [ein, setEin] = useState('')
    const [State, setState] = useState('')
    const [type, setType] = useState('')
    const [interestedArea, setInterestedArea] = useState('')

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
                        <div className="divider">
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
                        </div>
                        <div className="divider">
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
                        </div>
                        <div className="divider">
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
                        </div>
                        <div className="divider">
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
                            <div className="inputs">
                                <label>Country</label>
                                <div className="select">
                                    <select name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                                        <option value="">Select Country</option>
                                        {/* {countries && countries.map((country) => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))} */}
                                        <option value="USA">USA</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="divider">
                            <div className="inputs">
                                <label>EIN (9 digit number with no dashes)</label>
                                <div className="input">
                                    <input
                                    type="text"
                                    value={ein}
                                    onChange={(e) => setEin(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="inputs">
                                <label>State/Province</label>
                                <div className="select">
                                    <select name="country" value={State} onChange={(e) => setState(e.target.value)}>
                                        <option value="">Select State</option>
                                        {/* {countries && countries.map((country) => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))} */}
                                        <option value="USA">Alabama</option>
                                        
                                    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="divider">
                        <div className="inputs">
                                <label>Organization type </label>
                                <div className="select">
                                    <select name="country" value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="">Select Type</option>
                                        {/* {countries && countries.map((country) => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))} */}
                                        <option value="USA">501(c)(3) nonprofit</option>
                                        
                                    
                                    </select>
                                </div>
                            </div>
                            <div className="inputs">
                                <label>Interest area</label>
                                <div className="select">
                                    <select name="country" value={interestedArea} onChange={(e) => setInterestedArea(e.target.value)}>
                                        <option value="">Select </option>
                                        
                                    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="divider">
                            <div className="box1"></div>
                            <div className="box2">
                                <button type="submit">
                                    Register
                                </button>
                                <Link to='/login'>
                                    <h5>Already have an account <span color="#4472C4">Login Now</span></h5>
                                </Link>
                            </div>
                        
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Register