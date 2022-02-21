import React from 'react';
import { incrementAction, decrementAction } from './actions/count.action';
import { kappaIncrementAction } from './actions/kappa.action';
import { connect } from 'react-redux';
import './App.module.scss';

interface Props {
    counter: any;
    kappa: any;
    dispatch: any;
}

interface State {   
}

class App  extends React.Component<Props, State> {
    incrementFunction = () => {
        this.props.dispatch(incrementAction());
        this.props.dispatch(kappaIncrementAction());
    }
    
    decrementFunction = () => {
        this.props.dispatch(decrementAction())
        this.props.dispatch(kappaIncrementAction());
    }

    render() { 
        return (
            <div>
                <h1>The Counter App - {this.props.kappa.count}</h1>
                <button onClick={this.decrementFunction}>-</button>
                <span>{this.props.counter.count}</span>
                <button onClick={this.incrementFunction}>+</button>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        counter: store.counter,
        kappa: store.kappa,
    }
}

export default connect(mapStateToProps)(App) ;