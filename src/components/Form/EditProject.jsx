import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectModel from "../../datasource/ProjectModel";
import ProjectForm from "./ProjectForm";
import { getById, update } from "../../datasource/api-project";

const EditProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [project, setProject] = useState(new ProjectModel());
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        loadProject();
    }, [id]);

    const loadProject = async () => {
        try {
            setLoading(true);
            const data = await getById(id);
            setProject({
                id: data._id,
                title: data.title || '',
                completion: data.completion ? new Date(data.completion).toISOString().split('T')[0] : '',
                description: data.description || ''
            });
            setErrorMsg('');
        } catch (err) {
            setErrorMsg(err.message || 'Failed to load project');
            console.error('Error loading project:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((formData) => ({ ...formData, [name]: value }));
        setErrorMsg('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setErrorMsg('');
            const submitProject = {
                title: project.title,
                completion: project.completion,
                description: project.description
            };

            const data = await update(id, submitProject);
            if (data && data.success) {
                alert(data.message);
                navigate("/projects");
            } else {
                setErrorMsg(data.message || 'Failed to update project');
            }
        } catch (err) {
            setErrorMsg(err.message || 'Failed to update project');
            console.error('Error updating project:', err);
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ paddingTop: 80 }}>
                <p>Loading project...</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit Project</h1>
                    {errorMsg && (
                        <div className="flash" style={{ color: 'red', marginBottom: '10px', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
                            <span>{errorMsg}</span>
                        </div>
                    )}
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => navigate("/projects")}
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

export default EditProject;

