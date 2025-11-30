import API_BASE_URL from '../config/api';

export const getAll = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/services`);
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch service');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const create = async (service) => {
    try {
        const response = await fetch(`${API_BASE_URL}/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to create service');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const update = async (id, service) => {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to update service');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

export const deleteService = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to delete service');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

