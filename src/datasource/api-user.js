import API_BASE_URL from '../config/api';

export const getAll = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const create = async (user) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to create user');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const update = async (id, user) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to update user');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to delete user');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

