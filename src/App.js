import React from "react";
import FormContainer from "./Components/Form/FormContainer";
import CommentList from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";
import FetchComments from "./Components/FetchComments/FetchComments";

function App() {
  return (
    <main className="container">
      <Header />
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <FormContainer />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CommentList />      
          </div>
          <div className="col">
            <FetchComments />  
          </div>
        </div>
      </div>      
    </main>
  );
}

export default App;
