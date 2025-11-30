import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/services.css';
import { getAll, deleteService } from '../datasource/api-service';

function ServiceCard({ service, onDelete, onEdit }) {
    return (
        <div className="service-card" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{ marginBottom: '10px' }}>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
                    <button
                        onClick={() => onEdit(service._id)}
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
                        onClick={() => onDelete(service._id)}
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

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            setLoading(true);
            const data = await getAll();
            setServices(data);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to load services');
            console.error('Error loading services:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await deleteService(id);
                setServices(services.filter(service => service._id !== id));
            } catch (err) {
                alert(err.message || 'Failed to delete service');
                console.error('Error deleting service:', err);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/editservice/${id}`);
    };

    if (loading) {
        return (
            <div className="services-container">
                <h3>Services I Offer</h3>
                <p>Loading services...</p>
            </div>
        );
    }

    return (
        <div className="services-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3>Services I Offer</h3>
                <Link
                    to="/addservice"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Add New Service
                </Link>
            </div>
            {error && (
                <div style={{ color: 'red', marginBottom: '20px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                    {error}
                </div>
            )}
            {services.length === 0 ? (
                <div>
                    <p>No services found. <Link to="/addservice">Add your first service</Link></p>
                    <p style={{ marginTop: '20px' }}>Click on a service you are interested in to contact me for more information.</p>
                </div>
            ) : (
                <>
                    <p>Click on the service you are interested in to contact me for more information.</p>
                    {services.map((service) => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default Services;