import React, { Component } from 'react';

class Practice extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
    skills: [],
  };

  HandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlerClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  changeskillHandler = (e) =>{
    if(e.target.checked){
      this.setState({skills : [...this.state.skills, e.target.value]})
    }else{
      const skills = this.state.skills.filter(skill => skill !== e.target.value)
      this.setState({skills})
    }
  }

  render() {
    const { name, country, bio, birthday, skills } = this.state;
    return (
      <div className='container mt-2'>
        <form action='#' className='col-md-6'>
          <input
            onChange={this.HandleChange}
            type='text'
            value={name}
            className='form-control'
            name='name'
            placeholder='Enter your name'
          />
          <br />
          <select
            onChange={this.HandleChange}
            name='country'
            value={country}
            id='country'
            className='form-control'
          >
            <option value=''>Select country</option>
            <option value='Bangladesh'>Bangladesh</option>
            <option value='india'>india</option>
            <option value='Srilanka'>Srilanka</option>
            <option value='Pakisthan'>Pakisthan</option>
          </select>
          <br />
          <textarea
            onChange={this.HandleChange}
            name='bio'
            id=''
            value={bio}
            cols='10'
            rows='5'
            placeholder='Write something yourself'
            className='form-control'
          ></textarea>
          <br />
          <input
            onChange={this.HandleChange}
            type='date'
            value={birthday}
            className='form-control'
            name='birthday'
          />
          <br />
          <div>
            <input
              onChange={this.changeskillHandler}
              type='checkbox'
              name='skills'
              value='Java'
              checked={skills.includes('Java')}
            />
            Java
            <input
              onChange={this.changeskillHandler}
              type='checkbox'
              name='skills'
              value='Javascript'
              checked={skills.includes('Javascript')}
            />
            Javascript
            <input
              onChange={this.changeskillHandler}
              type='checkbox'
              name='skills'
              value='Python'
              checked={skills.includes('Python')}
            />
            Python
            <input
              onChange={this.changeskillHandler}
              type='checkbox'
              name='skills'
              value='GoLang'
              checked={skills.includes('GoLang')}
            />
            GoLang
          </div>
          <button onClick={this.handlerClick} className='btn btn-primary'>
            Send Data
          </button>
        </form>
      </div>
    );
  }
}

export default Practice;
