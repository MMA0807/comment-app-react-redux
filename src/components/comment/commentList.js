import React from 'react';
import { connect } from 'react-redux';
import { Comment } from './Comment';
import { removeComment } from '../../redux/actions';
import './comment.scss';
import { getAllComments } from '../../redux/selectors';

const CommentList = ({ comments, removeComment }) => {
  if (!comments.length) {
    return (
      <p className='text-center font-weight-bold'>Комментариев пока нет</p>
    );
  }
  return (
    <ul className='list-group mt-5'>
      {comments.map((comment) => (
        <li className='media list-group-item mb-4' key={comment.id}>
          <Comment comment={comment} removeComment={removeComment} />
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps =  {
  removeComment
};

const mapStateToProps = (state) => ({
    comments: getAllComments(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
