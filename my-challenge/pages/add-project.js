import { useState } from 'react';
import { useRouter } from 'next/router';
import "../styles/Home.module.css"; // Asegúrate de ajustar el import si es necesario

export default function AddProject() {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });
  const router = useRouter();

  const addProject = () => {
    // Verifica si todos los campos están llenos
    if (newProject.name && newProject.description && newProject.manager && newProject.assignedTo && newProject.status) {
      // Obtener proyectos existentes del almacenamiento local
      const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

      // Añadir el nuevo proyecto
      savedProjects.push({ id: Date.now(), ...newProject });

      // Guardar los proyectos actualizados en el almacenamiento local
      localStorage.setItem('projects', JSON.stringify(savedProjects));

      // Redirigir a la página "My Project"
      router.push('/my-project');
    } else {
      // Mostrar alerta si hay campos vacíos
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container">
      <h1>Add Project</h1>
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
          {/* Agrega más opciones aquí */}
        </select>
        <label>Assigned To</label>
        <select
          value={newProject.assignedTo}
          onChange={(e) => setNewProject({ ...newProject, assignedTo: e.target.value })}
        >
          <option value="">Select Assignee</option>
          <option value="Employee1">Employee 1</option>
          <option value="Employee2">Employee 2</option>
          {/* Agrega más opciones aquí */}
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
        <button onClick={addProject}>Add Project</button>
      </div>
    </div>
  );
}
