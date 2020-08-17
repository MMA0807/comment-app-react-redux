import React from 'react'
import { connect } from "react-redux"
import Comments from "./Comments";
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
      comments.map(comment => 
      <Comments comment={comment} key={comment.id} />)
  )
}

const mapDispatchToProps = {
  fetchComments
}

const mapStateToProps = (state) => ({
  comments: selectAllFetchComments(state),
  loading: getLoading(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchComments)
