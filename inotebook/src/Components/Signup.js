import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        console.log(response);

        const json = await response.json();
        console.log(json);
        if (json.success) {
            // store the auth token and redirect
            localStorage.setItem('autToken', json.autToken);
            navigate("/");
            props.showAlert("Account created successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-90 bg-light">
            <div className="card p-4 shadow-lg border-0" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}>
                <h2 className="text-center mb-3" style={{ color: "#000" }}>SignUp to Use iNotebook</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input type="text" className="form-control input-custom" id="name" name="name" onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                        <input type="email" className="form-control input-custom" id="email" name="email" onChange={onChange} required />
                        <div id="emailHelp" className="form-text text-muted">We'll never share your email.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input type="password" className="form-control input-custom" id="password" name="password" onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label fw-semibold">Confirm Password</label>
                        <input type="password" className="form-control input-custom" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 shadow-sm">Sign Up</button>
                </form>
            </div>
        </div>
    );
    
}

export default Signup
