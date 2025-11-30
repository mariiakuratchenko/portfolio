import React from 'react';

const UserForm = ({ user, handleChange, handleSubmit, isEdit = false }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    value={user.firstName || ''}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    value={user.lastName || ''}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    value={user.email || ''}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder={isEdit ? "Enter new password (leave blank to keep current)" : "Enter password"}
                    value={user.password || ''}
                    onChange={handleChange}
                    required={!isEdit}
                />
            </div>

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
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UserForm;

