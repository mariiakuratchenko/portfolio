import API_BASE_URL from '../config/api';

export const create = async (project) => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to create project');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

