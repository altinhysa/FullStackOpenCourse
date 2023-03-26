import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])


  const [selected, setSelected] = useState(0)

  const next = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    console.log(random)
    setSelected(random)
  }

  const indexOfLargest = (arr) => {
    return arr.reduce((largestIndex, number, currentIndex) => {
      return number > arr[largestIndex] ? currentIndex : largestIndex
    }, 0)
  }

  const largestIndex = indexOfLargest(points)

  const vote = () => {
    const temp = points[selected]++
    console.log(temp)
    const copyPoints = [...points]
    copyPoints.fill(temp, selected-1, selected)
    setPoints(copyPoints)
    console.log(points)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <button onClick={vote}>Vote</button>
      <button onClick={next}>next anecdote</button>
      <br/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[largestIndex]}
      <br/>
      has {points[largestIndex]} votes
    </div>
    
  )
}
export default App