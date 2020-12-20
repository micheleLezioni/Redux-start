import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { DECREMENT, INCREMENT } from './types';


const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  // l'oggetto che passo a dispatch è la mia azione che verrà presa dal reducer
  incrementCounter: (payload) => dispatch({ type: INCREMENT, payload }),
  decrementCounter: () => dispatch({ type: DECREMENT })
});

// const initialState = {
//   counter: 0
// }


export const App = (props) => {

  const { counter, incrementCounter, decrementCounter } = props

  const handleClick = (type) => {
    type === INCREMENT ? incrementCounter(22) : decrementCounter()
     
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>Contatore {counter}</p>
        <button onClick={() => handleClick(INCREMENT)}>Incrementa</button>
        <button onClick={() => handleClick(DECREMENT)}>Incrementa</button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

