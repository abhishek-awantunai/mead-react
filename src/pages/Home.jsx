import React, { Component } from 'react';

class Home extends Component {
    state = {
        count: 0
    }

    // Use Arrow Function to get This
    incrementHandler = () =>{
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
        console.log('incrementHandler clicked : ', this.state.count);
    }

    // Bind this function while calling itself 
    decrementHandler(){
        this.setState(prevState => {
            return {
                count: prevState.count > 0 ? prevState.count - 1 : 0
            }
        })
        console.log('decrementHandler clicked : ', this.state.count);
    }

    // Call using Arrow function only
    resetHandler(){
        this.setState(prevState => {
            return {
                count: 0
            }
        })
        console.log('resetHandler clicked : ', this.state.count);
    }

    render() { 
        return (
            <div className="container-fluid mt-5">
                <h3 className="text-center">
                    Count : {this.state.count}
                </h3>
                <button onClick={this.incrementHandler}>+</button>
                <button onClick={this.decrementHandler.bind(this)}>-</button>
                <button onClick={() => this.resetHandler()}>Reset</button>
            </div>
        );
    }
}

export default Home;