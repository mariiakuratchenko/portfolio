import React from 'react';

const ProjectForm = ({ project, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Enter project title"
                    value={project.title || ''}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="completion">Completion Date</label>
                <input
                    id="completion"
                    name="completion"
                    type="date"
                    className="form-control"
                    value={project.completion || ''}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    placeholder="Enter project description"
                    value={project.description || ''}
                    onChange={handleChange}
                    rows="5"
                    required
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

export default ProjectForm;

