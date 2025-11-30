import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/contact.css';
import { getAll, deleteContact } from '../datasource/api-contact';

function ContactCard({ contact, onDelete, onEdit }) {
    return (
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{ marginBottom: '10px' }}>
                        {contact.firstname} {contact.lastname}
                    </h4>
                    <p><strong>Email:</strong> {contact.email}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
                    <button
                        onClick={() => onEdit(contact._id)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(contact._id)}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        try {
            setLoading(true);
            const data = await getAll();
            setContacts(data);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to load contacts');
            console.error('Error loading contacts:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                await deleteContact(id);
                setContacts(contacts.filter(contact => contact._id !== id));
            } catch (err) {
                alert(err.message || 'Failed to delete contact');
                console.error('Error deleting contact:', err);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/editcontact/${id}`);
    };

    if (loading) {
        return (
            <div className="contact-container">
                <h2>Contacts</h2>
                <p>Loading contacts...</p>
            </div>
        );
    }

    return (
        <div className="contact-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Contacts</h2>
                <Link
                    to="/contactform"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Add New Contact
                </Link>
            </div>
            {error && (
                <div style={{ color: 'red', marginBottom: '20px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                    {error}
                </div>
            )}
            {contacts.length === 0 ? (
                <p>No contacts found. <Link to="/contactform">Add your first contact</Link></p>
            ) : (
                contacts.map((contact) => (
                    <ContactCard
                        key={contact._id}
                        contact={contact}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))
            )}
        </div>
    );
}

export default Contacts;

