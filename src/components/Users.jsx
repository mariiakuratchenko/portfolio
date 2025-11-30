import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/services.css';
import { getAll, deleteUser } from '../datasource/api-user';

function UserCard({ user, onDelete, onEdit }) {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="service-card" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{ marginBottom: '10px' }}>
                        {user.firstName} {user.lastName}
                    </h4>
                    <p><strong>Email:</strong> {user.email}</p>
                    {user.created && (
                        <p style={{ color: '#666', fontSize: '0.9em' }}>
                            <strong>Created:</strong> {formatDate(user.created)}
                        </p>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
                    <button
                        onClick={() => onEdit(user._id)}
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
                        onClick={() => onDelete(user._id)}
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

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await getAll();
            setUsers(data);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to load users');
            console.error('Error loading users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(id);
                setUsers(users.filter(user => user._id !== id));
            } catch (err) {
                alert(err.message || 'Failed to delete user');
                console.error('Error deleting user:', err);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/edituser/${id}`);
    };

    if (loading) {
        return (
            <div className="services-container">
                <h3>Users</h3>
                <p>Loading users...</p>
            </div>
        );
    }

    return (
        <div className="services-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3>Users</h3>
                <Link
                    to="/adduser"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Add New User
                </Link>
            </div>
            {error && (
                <div style={{ color: 'red', marginBottom: '20px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                    {error}
                </div>
            )}
            {users.length === 0 ? (
                <p>No users found. <Link to="/adduser">Add your first user</Link></p>
            ) : (
                users.map((user) => (
                    <UserCard
                        key={user._id}
                        user={user}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))
            )}
        </div>
    );
}

export default Users;

