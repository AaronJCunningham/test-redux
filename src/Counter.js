import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };
  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={this.increment}>Up</button>
          <h1>{this.props.count}</h1>
          <button onClick={this.decrement}>Down</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
