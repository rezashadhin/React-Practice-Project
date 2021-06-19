import React, { Component } from 'react';
import '../Profile.css'

class Profile extends Component {
  render() {
    return (
      <div className='container'>
       <div className='Bio col-md-5'>
        <div className='m-2'>
            <h4 className='mb-0'>Shadhin reza</h4>
            <p>FullStack Javascript Developer</p>
        </div>
        <div className='Skills m-2'>
            <h4>Skills : </h4>
            <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>C++</li>
            </ul>
        </div>
        <div className='links'>
            <h4>Links : </h4>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://">Linkedin</a></li>
            <li><a href="https://">Twitter</a></li>
            <li><a href="https://">Instagram</a></li>
        </div>
       </div>
      </div>
    );
  }
}

export default Profile;
