import React from "react";
import {Form} from "./Form";
import { connect } from "react-redux";
import { addComment, showAlert } from "../../redux/actions";
import { getAlert } from "../../redux/selectors";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      commentText: "",
    };
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const { author, commentText } = this.state;
    const { showAlert, addComment } = this.props;
    const date = Date.now();

    if (!author.trim() || !commentText.trim()) {
      showAlert('Введите данные!');
      return;
    }

    const newComment = {
      id: date,
      author,
      commentText,
      date: new Date(date).toLocaleString(),
    };

    addComment(newComment);

    this.setState({
      author: "",
      commentText: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { author, commentText } = this.state;
    const { alert } = this.props;

    return (
      <Form 
        alert = {alert}
        author = {author}
        commentText = {commentText}
        handleChange = {this.handleChange}
        formSubmitHandler = {this.formSubmitHandler}
      />
    );
  }
}

const mapDispatchToProps = {
  addComment,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: getAlert(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
