import React, { useState } from "react";
import "../css/project-styling.css";

function Course({ course }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="course-container">
      <div className="course-column">
        <h1>{course.code}</h1>
        <h2>{course.title}</h2>
        <h3>{course.description}</h3>
        <ul>
          {course.skills &&
            course.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        {course.prerequisites && (
          <h4>Prerequisites: {course.prerequisites.join(", ")}</h4>
        )}
        {course.requirements && <h4>Requirements: {course.requirements}</h4>}
        {course.workload && <h4>Workload: {course.workload}</h4>}
        {course.professors && (
          <h4>Professors: {course.professors.join(", ")}</h4>
        )}
      </div>

      <div className="course-column">
        {course.graph && (
          <img src={course.graph} alt="Course grade distribution" />
        )}
        <div className="like-dislike-container" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
          <button
            className="like-button"
            onClick={handleLike}
            style={{
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '50px', 
              border: '1px solid #ccc',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            👍 <span>{likes}</span>
          </button>
          <button
            className="dislike-button"
            onClick={handleDislike}
            style={{
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '50px',
              border: '1px solid #ccc',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            👎 <span>{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;