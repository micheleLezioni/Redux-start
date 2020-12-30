import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DECREMENT, INCREMENT } from './types';


const mapStateToProps = state => ({
  counter: state.counter,
  input: state.input
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

  const { counter, incrementCounter, decrementCounter, type } = props

  //const [disabled, setDisabled] = useState(false)

  const [value, setValue] = useState("")

  const handleClick = (type) => {
    type === INCREMENT ? incrementCounter(22) : decrementCounter()
  } 

  // useEffect(() => {
  //   if(!type === "success") {
  //     setDisabled(true)
  //   } else {
  //     setDisabled(false)
  //   }
  // }, [type])

  const renderCounter = useCallback(
    () => {
      return counter >0 && <p>Contatore {counter}</p>
    },
    [counter],
  )

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [],
  )

  const rederCounterMemo = useMemo(() => {
    return counter >0 && <p>Contatore {counter}</p>
  }, [counter])


  const disabled = useMemo(() => type !== "success", [type])

  const disabledCallback = useCallback(
    () => type !== "success",
    [type],
  )

  return (
    <div className="App">
      <header className="App-header">
        {rederCounterMemo}
        <input disabled={disabled} type="text" value={value} onChange={handleChange}/> 
        <button onClick={() => handleClick(INCREMENT)}>Incrementa</button>
        <button onClick={() => handleClick(DECREMENT)}>Incrementa</button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

