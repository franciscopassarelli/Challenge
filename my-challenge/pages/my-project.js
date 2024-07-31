import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MyProject.module.css'; // Asegúrate de que la ruta sea correcta

export default function MyProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Obtener proyectos del almacenamiento local
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  const handleDelete = (id) => {
    // Confirmar la eliminación
    if (window.confirm('Are you sure you want to delete this project?')) {
      // Filtrar el proyecto a eliminar
      const updatedProjects = projects.filter(project => project.id !== id);
      // Actualizar el almacenamiento local
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      // Actualizar el estado
      setProjects(updatedProjects);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description}
            <div>
              <p><strong>Manager:</strong> {project.manager}</p>
              <p><strong>Assigned To:</strong> {project.assignedTo}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </div>
            <div className={styles.buttonGroup}>
              <Link href={`/edit-project/${project.id}`} className={styles.editButton}>
                Edit
              </Link>
              <button 
                className={styles.deleteButton}
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
