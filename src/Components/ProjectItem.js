import React, { Component } from "react";

class ProjectItem extends Component {
  handledeleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    console.log(this.props);
    return (
      <li className="project">
        <strong>{this.props.project.title}</strong> -{" "}
        {this.props.project.category}{" "}
        <a
          href="#"
          onClick={this.handledeleteProject.bind(this, this.props.project.id)}
        >
          {" "}
          Remove
        </a>
      </li>
    );
  }
}
export default ProjectItem;
