import React from 'react'
import { connect } from 'react-redux'
import { Comment } from '../comment/comment';
import { fetchComments } from '../../redux/actions';
import { Loader } from '../Loader/Loader'
import { selectAllFetchComments, getLoading } from '../../redux/selectors';

const FetchComments = ({loading, comments, fetchComments}) => {
  if ( loading ) {
    return <Loader />
  }
  
  if (!comments.length) {
    return <button 
    className='btn btn-success'
    onClick={() => fetchComments()}
    >Загрузить</button>
  }
  return (
    <ul className='list-group mt-5'>
      {
        comments.map(comment => (
          <li className='media list-group-item mb-4' key={comment.id}>
            <Comment comment={comment} />
          </li>))
      }
    </ul>
  )
}

const mapDispatchToProps = {
  fetchComments,
}

const mapStateToProps = (state) => ({
  comments: selectAllFetchComments(state),
  loading: getLoading(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchComments)