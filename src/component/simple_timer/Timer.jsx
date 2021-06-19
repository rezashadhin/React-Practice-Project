import React, { Component } from 'react';
import './Timer.css'
import ManageCounter from './Manage_counter'

class Timer extends Component {
    state = {
        count : 0
    }
    intervalID = null
    decrement = () =>{
        if(this.state.count > 0){
        this.setState({count : this.state.count - 1})
        }
    }
    increment = () =>{
        this.setState({count : this.state.count+1})
    }
    startTimer = () =>{
        if(this.state.count > 0 && !this.intervalID){
            this.intervalID = setInterval(() => {
                this.setState({count : this.state.count - 1},()=>{
                    if(this.state.count === 0){
                        alert('Timer is Finished!')
                        clearInterval(this.intervalID)
                        this.intervalID = null
                    }
                })
            }, 1000);
        }
    }
    stopTimer = () =>{
        if(this.intervalID){
            clearInterval(this.intervalID)
            this.intervalID = null
        }
    }
    resetTimer = () =>{
        this.setState({count : 0})
        clearInterval(this.intervalID)
        this.intervalID = null
    }
    render() {
        return (
            <div>
                <div className="container mt-4">
                    <h2 className='text-muted'>Simple Timer</h2>
                    <button onClick={this.decrement} className='btn1'> - </button>
                    <span className='bg-primary text-white span1'> {this.state.count} </span> 
                    <button onClick={this.increment} className='btn1'> + </button>
                </div>
                <div className="col-md-6 mt-4">
                    <ManageCounter startTimer = {this.startTimer} stopTimer={this.stopTimer}
                    resetTimer={this.resetTimer}
                    />
                </div>
            </div>
        );
    }
}

export default Timer;