import React , { useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import About from "../About"
import Grid from "../../components/Grid"
import Card from "../../components/Card"
import ProjectCard from "../../components/ProjectCard" 
import projectData from "../../projects.json"

import "./style.css";



function Projects() {

  const [projects, setprojects] = useState(projectData);

  const removeproject = (id) => {
    // Filter projects for projects with an id not equal to the id being removed
    const newprojects = projects.filter((project) => project.id !== id);
    // Set projects equal to the new projects array
    setprojects([...newprojects]);
  };

  return (
    <div>
      <Container >
          <Row >
            <Grid>
              {projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                />
              ))}
            </Grid>
        </Row >
      </Container >
    </div>
  );
}

export default Projects;