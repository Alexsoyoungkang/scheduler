import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode){ // newMode, which represents the new mode you want to transition to.
    setHistory(prev => [...prev, newMode])
  }
  /* setHistory is a function provided by the useState hook to update the history state.
     This function is called with the previous state of the history array as its argument, prev.
     create a new array by spreading the elements of the previous state ([...prev])
     and then add the newMode element to the end of the new array. 
  */

  function back() {
    if (history.length > 1) {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
    }
  }
  /* prev.length calculates the current length of the prev array, which represents the current history of modes.
     prev.length - 1 subtracts 1 from the length, effectively giving you the index of the last mode in the history.
     prev.slice(0, prev.length - 1) creates a new array that contains all elements of prev except for the last one.
     It removes the last mode from the history

  */

  return { mode: history[history.length -1], transition, back };
}