import React from 'react';
import {Form} from './Form';
import { connect } from 'react-redux';
import { addComment, showAlert } from '../../redux/actions';
import { getAlert } from '../../redux/selectors';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: '',
    };
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const { name, body } = this.state;
    const { showAlert, addComment } = this.props;
    const date = Date.now();

    if (!name.trim() || !body.trim()) {
      showAlert('Введите данные!');
      return;
    }

    const newComment = {
      id: date,
      name,
      body,
      date: new Date(date).toLocaleString(),
    };

    addComment(newComment);

    this.setState({
      name: '',
      body: '',
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
    const { name, body } = this.state;
    const { alert } = this.props;

    return (
      <Form 
        alert = {alert}
        name = {name}
        body = {body}
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
