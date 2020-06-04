import React from "react";
import Form from "./Components/Form/Form";
import CommentList from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

function App() {
  return (
    <main className="container">
      <Header />
      <Form />
      <CommentList />
    </main>
  );
}

export default App;
