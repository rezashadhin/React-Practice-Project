import React from 'react';
import './Timer.css'

function Manage_counter(props) {
    return (
        <div>
            <button onClick={props.startTimer} className='btn1'>Start</button>
            <button onClick={props.stopTimer} className='btn1'>Pause</button>
            <button onClick={props.resetTimer} className='btn1'>Reset</button>
        </div>
    );
}

export default Manage_counter;