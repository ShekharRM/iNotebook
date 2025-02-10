import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // store the auth token and redirect
            localStorage.clear();
            localStorage.setItem('autToken', json.autToken);
            let token = localStorage.getItem('autToken')
            console.log(token);
            props.showAlert("Logged in successfully", "success");
            navigate("/");
        }
        else {
            props.showAlert("Invalid detials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg border-0" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}>
                <h2 className="text-center mb-3">Login to iNotebook</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label fw-semibold">Email address</label>
                        <input 
                            type="email" 
                            className="form-control input-custom" 
                            id="email1" 
                            value={credentials.email} 
                            onChange={onChange} 
                            name="email" 
                            aria-describedby="emailHelp" 
                            required
                        />
                        <div id="emailHelp" className="form-text text-muted">We'll never share your email.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password1" className="form-label fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control input-custom" 
                            id="password1" 
                            value={credentials.password} 
                            onChange={onChange} 
                            name="password" 
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 shadow-sm">Login</button>
                </form>
            </div>
        </div>
    );
    
}

export default Login
