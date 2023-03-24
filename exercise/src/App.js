import { useState } from 'react'

// const Display = ({ counter }) => <div>{counter}</div>


// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   console.log('rendering with counter value', counter)


//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }
//   const increaseByOne = () => {
//     setCounter(counter+1);
//     console.log('increasing, value before', counter)
//   }
//   const decreaseByOne = () => { 
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter}></Display>
//       <Button handleClick={increaseByOne} text="plus"/>
//       <Button handleClick={setToZero} text="reset" />
//       <Button handleClick={decreaseByOne} text="minus" />

//     </div>
//   )
// }


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () =>  {
    setClicks({...clicks , left: clicks.left + 1})
    setAll(allClicks.concat('L'))
  }


  const handleRightClick = () => {

    setClicks({...clicks, right: clicks.right + 1})
    setAll(allClicks.concat('R'))

  }

  return (
    <div>
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clicks.right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App