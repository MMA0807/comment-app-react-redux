import React from 'react'

export default ({ comment }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="mt-0 mb-1 h5">{comment.name}</h3>
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  )
}
