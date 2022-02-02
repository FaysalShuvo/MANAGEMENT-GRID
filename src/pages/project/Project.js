import "./Project.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummery from "./ProjectSummery";
import ProjectComments from "./ProjectComments";

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading.....</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummery project={document} />
      <ProjectComments project={document}/>
    </div>
  );
};

export default Project;
