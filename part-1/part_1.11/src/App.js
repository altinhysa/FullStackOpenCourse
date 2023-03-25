import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad, allClicks, average, positive } = props;
  if(allClicks===0){
    return (
      <>
      <h1>Statistics</h1>
      <p>No Feedback given</p>
      </>
    )
  }


  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="All" value={allClicks} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positives" value={positive} />
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({handleEvent, text}) => <button onClick={handleEvent}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const average = ((-1*bad)+(good*1)) / allClicks
  const positive = (good * 100 / allClicks) + " %"
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
      <Button handleEvent={handleGood} text="good" />
      <Button handleEvent={handleNeutral} text="neutral" />
      <Button handleEvent={handleBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} positive={positive} average={average}/>
    </div>
  )
}

export default App