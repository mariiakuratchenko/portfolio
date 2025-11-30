import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserModel from "../../datasource/UserModel";
import UserForm from "./UserForm";
import { getById, update } from "../../datasource/api-user";

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(new UserModel());
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        loadUser();
    }, [id]);

    const loadUser = async () => {
        try {
            setLoading(true);
            const data = await getById(id);
            setUser({
                id: data._id,
                firstName: data.firstName || '',
                lastName: data.lastName || '',
                email: data.email || '',
                password: '' // Don't load password for security
            });
            setErrorMsg('');
        } catch (err) {
            setErrorMsg(err.message || 'Failed to load user');
            console.error('Error loading user:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }));
        setErrorMsg('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setErrorMsg('');
            const submitUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            };
            
            // Only include password if it's provided
            if (user.password && user.password.trim() !== '') {
                submitUser.password = user.password;
            }

            const data = await update(id, submitUser);
            if (data && data.success) {
                alert(data.message);
                navigate("/users");
            } else {
                setErrorMsg(data.message || 'Failed to update user');
            }
        } catch (err) {
            setErrorMsg(err.message || 'Failed to update user');
            console.error('Error updating user:', err);
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ paddingTop: 80 }}>
                <p>Loading user...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit User</h1>
                    {errorMsg && (
                        <div className="flash" style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                            <span>{errorMsg}</span>
                        </div>
                    )}
                    <UserForm
                        user={user}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isEdit={true}
                    />
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => navigate("/users")}
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

export default EditUser;

