import React from "react";
import { connect } from "react-redux";
import { addComment, showAlert } from "../../redux/actions";
import { Alert } from "../Alert/Alert";

class Form extends React.Component {
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
      showAlert();
      this.setState({
        author: "",
        commentText: "",
      });
      setTimeout(() => {
        showAlert();
      }, 2000);
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
      <form onSubmit={this.formSubmitHandler}>
        {alert && <Alert />}
        <div className="form-group row">
          <label
            htmlFor="commentAuthor"
            className="col-sm-2 col-form-label"
            hidden
          >
            Имя
          </label>
          <div className="col-sm-12">
            <input
              id="commentAuthor"
              name="author"
              type="text"
              className="form-control"
              placeholder="Введите свое Имя..."
              required
              value={author}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="commentBox"
            className="col-sm-2 col-form-label"
            hidden
          >
            Ваш комментарий
          </label>
          <div className="col-sm-12">
            <textarea
              id="commentBox"
              rows="3"
              name="commentText"
              type="text"
              className="form-control"
              placeholder="Оставьте свой комментарий..."
              required
              value={commentText}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary mt-4">
              Отправить
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addComment,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
