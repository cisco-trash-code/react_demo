import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {

    state = {
        numOne: 1,
        numTwo: 2,
        sum: null
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <Body data={this.state} handleNew={this.handleNew} handleAdd={this.handleAdd}/>
                <Footer />
            </div>
        )
    }

    handleAdd = () => {
        let sum = this.state.numOne + this.state.numTwo
        this.setState({
            sum: sum
        })
    }

    handleNew = () => {
        this.setState({
            numOne: Math.ceil(Math.random()*10),
            numTwo: Math.ceil(Math.random()*10),
            sum: ''
        })
    }

}

export default App;

