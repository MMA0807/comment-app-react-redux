import React from "react";
import {Alert} from '../Alert/Alert'

export const Form = ({alert, author, commentText, handleChange, formSubmitHandler}) => {
   
    return (
        <form onSubmit={formSubmitHandler}>
            {alert && <Alert text={alert} />}
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
                      onChange={handleChange}
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
                onChange={handleChange}
            />
                    <button type="submit" className="btn btn-primary mt-4">
                        Отправить
                    </button>
                </div>
            </div>
        </form>
    );
}