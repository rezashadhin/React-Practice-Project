import React, { Component } from 'react';

class UncontroledForm extends Component {
    changeSubmit = event =>{
        event.preventDefault()
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);
        event.target.reset()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.changeSubmit} className='col-md-6'>
                    <input type="text" className='form-control mb-2' placeholder='name' name='name' />
                    <input type="email" className='form-control mb-2' placeholder='tarunna147@gmail.com' name='email' />
                    <input type="password" className='form-control mb-2' placeholder='*******' name='password' />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        );
    }
}

export default UncontroledForm;