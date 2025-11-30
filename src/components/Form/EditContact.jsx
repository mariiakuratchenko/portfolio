import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactModel from '../../datasource/ContactModel';
import { getById, update } from '../../datasource/api-contact';
import '../CSS/contact.css';

function EditContact() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState(new ContactModel());
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        loadContact();
    }, [id]);

    const loadContact = async () => {
        try {
            setLoading(true);
            const data = await getById(id);
            setFormData({
                id: data._id,
                firstname: data.firstname || '',
                lastname: data.lastname || '',
                email: data.email || ''
            });
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to load contact');
            console.error('Error loading contact:', err);
        } finally {
            setLoading(false);
        }
    };

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
        setError('');
        setMessage('');

        try {
            const submitContact = {
                firstname: formData.firstname.trim(),
                lastname: formData.lastname.trim(),
                email: formData.email.trim()
            };

            const result = await update(id, submitContact);

            if (result && result.success) {
                setMessage(result.message || 'Contact updated successfully!');
                setTimeout(() => {
                    navigate('/contacts');
                }, 1500);
            } else {
                throw new Error(result.message || 'Failed to update contact');
            }
        } catch (err) {
            setError(err.message || 'An error occurred. Please try again.');
            console.error('Error updating contact:', err);
        }
    }

    if (loading) {
        return (
            <div className="contact-container">
                <p>Loading contact...</p>
            </div>
        );
    }

    return (
        <div className="contact-container">
            <h2>Edit Contact</h2>
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
                        style={{ 
                            padding: '10px 20px', 
                            backgroundColor: '#007bff', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px', 
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}
                    >
                        Update
                    </button>
                    <button 
                        className="btn btn-secondary" 
                        type="button" 
                        onClick={() => navigate('/contacts')}
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
        </div>
    );
}

export default EditContact;

