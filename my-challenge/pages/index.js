import { useState } from 'react';
import { useRouter } from 'next/router';
import "../styles/Home.module.css";

export default function Home() {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });
  const router = useRouter();

  const addProject = () => {
    if (
      newProject.name &&
      newProject.description &&
      newProject.manager &&
      newProject.assignedTo &&
      newProject.status
    ) {
      // Obtener proyectos existentes del almacenamiento local
      const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

      // Añadir el nuevo proyecto
      savedProjects.push({ id: Date.now(), ...newProject });

      // Guardar los proyectos actualizados en el almacenamiento local
      localStorage.setItem('projects', JSON.stringify(savedProjects));

      // Redirigir a la página "My Project"
      router.push('/my-project');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <h1>Project Management</h1>

      <div className="input-group">
        <label>Project Name</label>
        <input
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <label>Project Description</label>
        <input
          type="text"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <label>Project Manager</label>
        <select
          value={newProject.manager}
          onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
        >
          <option value="">Select Manager</option>
          <option value="Manager1">Manager 1</option>
          <option value="Manager2">Manager 2</option>
          <option value="Manager3">Manager 3</option>
        </select>
        <label>Assigned To</label>
        <select
          value={newProject.assignedTo}
          onChange={(e) => setNewProject({ ...newProject, assignedTo: e.target.value })}
        >
          <option value="">Select Assignee</option>
          <option value="Person1">Person 1</option>
          <option value="Person2">Person 2</option>
          <option value="Person3">Person 3</option>
        </select>
        <label>Status</label>
        <select
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={addProject}>Create Project</button>
      </div>
    </div>
  );
}
