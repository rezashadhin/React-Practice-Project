import React from 'react';
import TextInput from './TextInput';
import propTypes from 'prop-types';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} className='col-md-6'>
        <TextInput
          name='name'
          label='Name :'
          placeholder='Shadhin reza'
          type='text'
          value={props.values.name}
          onchange={props.onchange}
        />
        <TextInput
          name='email'
          label='Email :'
          placeholder='test@gamil.com'
          type='email'
          value={props.values.email}
          onchange={props.onchange}
        />
        <TextInput
          name='password'
          label='Password :'
          placeholder='*********'
          type='password'
          value={props.values.password}
          onchange={props.onchange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

Form.propTypes = {
    onSubmit : propTypes.func.isRequired,
    onchange : propTypes.func.isRequired,
    values : propTypes.object.isRequired
}

export default Form;
