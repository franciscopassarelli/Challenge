import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../../styles/Home.module.css";

export default function EditProject() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });

  useEffect(() => {
    if (id) {
      const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      const projectToEdit = savedProjects.find(p => p.id === parseInt(id));
      if (projectToEdit) {
        setProject(projectToEdit);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const saveProject = () => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = savedProjects.map(p =>
      p.id === project.id ? project : p
    );
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    router.push('/my-project');
  };

  return (
    <div className="container">
      <h1>Edit Project</h1>
      <div className="input-group">
        <label>Project Name</label>
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
        />
        <label>Project Description</label>
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
        />
        <label>Project Manager</label>
        <select
          name="manager"
          value={project.manager}
          onChange={handleChange}
        >
          <option value="">Select Manager</option>
          <option value="Manager1">Manager 1</option>
          <option value="Manager2">Manager 2</option>
          <option value="Manager3">Manager 3</option>
        </select>
        <label>Assigned To</label>
        <select
          name="assignedTo"
          value={project.assignedTo}
          onChange={handleChange}
        >
          <option value="">Select Assignee</option>
          <option value="Person1">Person 1</option>
          <option value="Person2">Person 2</option>
          <option value="Person3">Person 3</option>
        </select>
        <label>Status</label>
        <select
          name="status"
          value={project.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={saveProject}>Save</button>
      </div>
    </div>
  );
}
