import API_BASE_URL from '../config/api';

export const getAll = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts`);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch contact');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const create = async (contact) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to create contact');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const update = async (id, contact) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to update contact');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const deleteContact = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to delete contact');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

