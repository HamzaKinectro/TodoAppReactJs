import React, { Component } from "react";
import Projects from "./Components/Projects";
import "./App.css";
import uuid from "uuid";
import AddProeject from "./Components/AddProject";
import $ from "jquery";
import Todos from "./Components/Todos";
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }

  getTodos() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState(
          {
            todos: data
          },
          function() {
            console.log(this.state);
          }
        );
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("error " + err);
      }
    });
  }
  getProject() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Social",
          category: "Marketing"
        },
        {
          id: uuid.v4(),
          title: "Web Design",
          category: "Desiging and Implementation"
        },
        {
          id: uuid.v4(),
          title: "Application",
          category: "Mobile Development"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProject();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <p>This is the Main App Component</p>
        <AddProeject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
