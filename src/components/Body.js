import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component {

    render() {
        return (
            <div className='body'>
                <h1>
                    {this.props.data.numOne} + {this.props.data.numTwo} = <span className='answer'>{this.props.data.sum}</span>
                </h1> 
                <button className='btn btn-warning m-2' onClick={this.props.handleAdd}>Add</button> 
                <button className='btn btn-primary m-2' onClick={this.props.handleNew}>New</button>               
            </div>
        )
    }


}

export default Body;
