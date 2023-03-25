import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad, allClicks } = props;

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {bad+neutral+good}</p>
      <p>average {((-1*bad)+(good*1))/allClicks}</p>
      <p>positive {good*100/allClicks} %</p>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
    setAll(allClicks + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allClicks + 1)
  
  }
  const handleBad = () => {
    setBad(bad + 1);
    setAll(allClicks + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />
    </div>
  )
}

export default App