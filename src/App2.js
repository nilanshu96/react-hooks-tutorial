import {Component} from 'react';

class App2 extends Component {
    constructor() {
        super();
        this.state = {
            count: {count1: 10, count2: 20}
        }
    }

    render() {
        return (<div className="App">
        <button onClick={() => this.setState(currentState => ({...currentState, count:{...currentState.count, count1: currentState.count.count1 + 1}}))}>+</button>
        <div>Count 1: {this.state.count.count1}</div>
        <div>Count 2: {this.state.count.count2}</div>
      </div>)
    }
}

export default App2;