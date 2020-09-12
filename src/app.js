import React from 'react';
import FormContainer from './components/form/formContainer';
import CommentList from './components/comment/commentList';
import { Header } from './components/header';
import FetchComments from './components/fetchComments/fetchComments';

function App() {
  return (
    <main className='container'>
      <Header />
      <div className='container pt-3'>
        <div className='row'>
          <div className='col'>
            <FormContainer />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <CommentList />      
          </div>
          <div className='col'>
            <FetchComments />  
          </div>
        </div>
      </div>      
    </main>
  );
}

export default App;
