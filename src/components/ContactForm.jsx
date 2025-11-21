import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/contact.css';
import API_BASE_URL from '../config/api';

function ContactForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
        setMessage('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: formData.firstname.trim(),
                    lastname: formData.lastname.trim(),
                    email: formData.email.trim()
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to create contact');
            }

            if (result.success) {
                setMessage(result.message || 'Contact created successfully!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: ''
                });
            } else {
                throw new Error(result.message || 'Failed to create contact');
            }
        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
            console.error('Error creating contact:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="firstnameTextField">First Name</label>
                <input
                    id="firstnameTextField"
                    name="firstname"
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lastnameTextField">Last Name</label>
                <input
                    id="lastnameTextField"
                    name="lastname"
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="emailTextField">Email</label>
                <input
                    id="emailTextField"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {message && (
                <div className="alert alert-success" style={{ color: 'green', marginTop: '10px', padding: '10px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
                    {message}
                </div>
            )}

            {error && (
                <div className="alert alert-danger" style={{ color: 'red', marginTop: '10px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                    {error}
                </div>
            )}

            <div className="form-actions" style={{ marginTop: '20px' }}>
                <button 
                    className="btn btn-primary" 
                    type="submit"
                    disabled={loading}
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: loading ? 'not-allowed' : 'pointer',
                        marginRight: '10px'
                    }}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                <button 
                    className="btn btn-secondary" 
                    type="button" 
                    onClick={() => navigate(-1)}
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#6c757d', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer'
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ContactForm;

