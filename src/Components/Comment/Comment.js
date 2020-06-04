import React from "react";

export const Comment = ({ comment, removeComment }) => {
  const { id, author, commentText, date } = comment;

  return (
    <div className="media-body comment">
      <div className="text-wrap">
        <h2 className="mt-0 mb-1 h5">{author}</h2>
        <div className="text-muted text-wrap text-break">{commentText}</div>
        <small className="text-muted">{date}</small>
      </div>
      <button
        type="button"
        className="btn btn-outline-dark btn-sm"
        onClick={() => removeComment(id)}
      >
        &times;
      </button>
    </div>
  );
};
