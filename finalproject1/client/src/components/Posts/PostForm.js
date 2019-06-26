import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {
renderError({error, touched}){
  if (touched && error) {
    return (
      <div className = "ui error message">
        <div className="header">{error}</div>
      </div>
    )
  }
}

  renderInput = ({ input, label, meta }) =>  {
    const className= `field ${meta.error && meta.touched ? 'error': ''}`;
    console.log(input);

    return  (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSub = (formValues) => {
    // console.log(formValues);
    this .props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSub)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title"></Field>

        <Field name="description" component={this.renderInput} label="Enter Description"></Field>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'You must enter a Group title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a Group description';
  }

  return errors;

};

export default reduxForm({
  form: 'postForm',
  validate: validate
})(PostForm);
