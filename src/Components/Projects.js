import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  deletProject(id) {
    this.props.onDelete(id);
  }

  render() {
    //console.log(this.props);
    let projectItem;
    if (this.props.projects) {
      projectItem = this.props.projects.map(project => {
        console.log("data in object arr is " + project);
        return (
          <ProjectItem
            key={project.title}
            onDelete={this.deletProject.bind(this)}
            project={project}
          />
        );
      });
    }

    return (
      <div className="Projects">
        <p>Hello is it work</p>

        {projectItem}
      </div>
    );
  }
}
export default Projects;
