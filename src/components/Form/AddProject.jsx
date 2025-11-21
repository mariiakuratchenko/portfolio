import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModel from "../../datasource/ProjectModel";
import ProjectForm from "./ProjectForm";
import { create } from "../../datasource/api-project";

const AddProject = () => {
    const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitting project: ", project);

        const submitProject = {
            id: project.id,
            title: project.title,
            completion: project.completion,
            description: project.description
        };

        create(submitProject)
            .then(data => {
                if (data && data.success) {
                    alert(data.message);
                    navigate("/project/list");
                } else {
                    setErrorMsg(data.message);
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Project</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddProject;