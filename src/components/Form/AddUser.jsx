import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserModel from "../../datasource/UserModel";
import UserForm from "./UserForm";
import { create } from "../../datasource/api-user";

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(new UserModel());
    const [errorMsg, setErrorMsg] = useState('');

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
                email: user.email,
                password: user.password
            };

            const data = await create(submitUser);
            if (data && data.success) {
                alert(data.message);
                navigate("/users");
            } else {
                setErrorMsg(data.message || 'Failed to create user');
            }
        } catch (err) {
            setErrorMsg(err.message || 'Failed to create user');
            console.error('Error creating user:', err);
        }
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add User</h1>
                    {errorMsg && (
                        <div className="flash" style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                            <span>{errorMsg}</span>
                        </div>
                    )}
                    <UserForm
                        user={user}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isEdit={false}
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

export default AddUser;

