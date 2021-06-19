import React from 'react';
import propTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input
            type={props.type}
            className='form-control mb-2'
            placeholder={props.placeholder}
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.onchange}
          />
        </div>
    );
}

TextInput.propTypes = {
    name : propTypes.string.isRequired,
    label : propTypes.string.isRequired,
    type : propTypes.string.isRequired,
    placeholder : propTypes.string.isRequired,
    value : propTypes.string.isRequired,
    onchange : propTypes.func.isRequired

}
TextInput.defaultProps = {
    type : 'text',
    label : '',
    placeholder : ''
}

export default TextInput;