import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServiceModel from "../../datasource/ServiceModel";
import ServiceForm from "./ServiceForm";
import { getById, update } from "../../datasource/api-service";

const EditService = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState(new ServiceModel());
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        loadService();
    }, [id]);

    const loadService = async () => {
        try {
            setLoading(true);
            const data = await getById(id);
            setService({
                id: data._id,
                title: data.title || '',
                description: data.description || ''
            });
            setErrorMsg('');
        } catch (err) {
            setErrorMsg(err.message || 'Failed to load service');
            console.error('Error loading service:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setService((formData) => ({ ...formData, [name]: value }));
        setErrorMsg('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setErrorMsg('');
            const submitService = {
                title: service.title,
                description: service.description
            };

            const data = await update(id, submitService);
            if (data && data.success) {
                alert(data.message);
                navigate("/services");
            } else {
                setErrorMsg(data.message || 'Failed to update service');
            }
        } catch (err) {
            setErrorMsg(err.message || 'Failed to update service');
            console.error('Error updating service:', err);
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ paddingTop: 80 }}>
                <p>Loading service...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit Service</h1>
                    {errorMsg && (
                        <div className="flash" style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                            <span>{errorMsg}</span>
                        </div>
                    )}
                    <ServiceForm
                        service={service}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => navigate("/services")}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditService;

