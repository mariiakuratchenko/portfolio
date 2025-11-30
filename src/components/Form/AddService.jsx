import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceModel from "../../datasource/ServiceModel";
import ServiceForm from "./ServiceForm";
import { create } from "../../datasource/api-service";

const AddService = () => {
    const navigate = useNavigate();
    const [service, setService] = useState(new ServiceModel());
    const [errorMsg, setErrorMsg] = useState('');

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

            const data = await create(submitService);
            if (data && data.success) {
                alert(data.message);
                navigate("/services");
            } else {
                setErrorMsg(data.message || 'Failed to create service');
            }
        } catch (err) {
            setErrorMsg(err.message || 'Failed to create service');
            console.error('Error creating service:', err);
        }
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Service</h1>
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

export default AddService;

