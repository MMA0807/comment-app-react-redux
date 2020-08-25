import { createSelector } from 'reselect'

const selectAllComments = state => state.comments.comments

export const getAlert = state => state.app.alert

export const getLoading = state => state.app.loading

export const selectAllFetchComments = state => state.comments.fetchComments

export const getAllComments = createSelector(selectAllComments, (comments) => {
  return comments.filter(comment => true)
})