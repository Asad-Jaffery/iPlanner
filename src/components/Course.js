import React, { useState } from "react";
import "../css/project-styling.css";

function Course({ course }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  // New comment functions
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const comment = {
        id: Date.now(),
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
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
        <div
          className="like-dislike-container"
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="like-button"
            onClick={handleLike}
            style={{
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            👍 <span>{likes}</span>
          </button>
          <button
            className="dislike-button"
            onClick={handleDislike}
            style={{
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            👎 <span>{dislikes}</span>
          </button>
        </div>

        {/* Comments Section - Added Below Existing Content */}
        <div
          className="comments-section"
          style={{ marginTop: "30px", width: "100%" }}
        >
          <button
            onClick={toggleComments}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#f0f0f0",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            {showComments
              ? "Hide Comments"
              : `Show Comments (${comments.length})`}
          </button>

          {showComments && (
            <>
              <div className="comment-form" style={{ marginBottom: "20px" }}>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      marginBottom: "10px",
                      resize: "vertical",
                      minHeight: "80px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "8px 16px",
                      borderRadius: "4px",
                      border: "none",
                      background: "#0066cc",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Post Comment
                  </button>
                </form>
              </div>

              <div className="comments-list">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="comment"
                      style={{
                        padding: "15px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        marginBottom: "15px",
                        background: "#f9f9f9",
                      }}
                    >
                      <p style={{ margin: "0 0 10px 0" }}>{comment.text}</p>
                      <small style={{ color: "#666" }}>
                        {comment.timestamp}
                      </small>
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#666", fontStyle: "italic" }}>
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Course;
