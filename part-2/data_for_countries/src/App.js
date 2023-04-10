import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState('')
  const [countries, setCountries] = useState({})
  const [country, setCountry] = useState('')
  const [capital, setCapital] = useState('')
  const [area, setArea] = useState('')
  const [languages, setLanguages] = useState({})
  const [image, setImage] = useState({})

  useEffect(() => {
    console.log('effect run, currency is now', country)

    // skip if currency is not defined
    if (country) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => {
          const all = response.data.map(element => element.name.common).filter(el => el.includes(country))
          if(all.length >10){
            setCountries('Too many matches specify a filter')
          }else if(all.length > 1){
            setCountries(all)
          }else if(all.length===1){
            setCountries('found')
            setName(all)
            axios.get(`https://restcountries.com/v3.1/name/${all}`).then(res => {
              console.log(res.data)
              setCapital(res.data[0].capital)
              setArea(res.data[0].area)
              setLanguages(res.data[0].languages)
              setImage(res.data[0].flags.png)
              console.log(languages)
            })
          }
          
        })
    }
  }, [country])

  const handleChange = (event) => {
    setCountry(event.target.value)
  }


  return (
    <div>

      <div>find country: <input value={country} onChange={handleChange} /></div>
      <pre>
        {JSON.stringify(countries, null, 2)}
      </pre>
      <b>{name}</b>
      <br></br>
      capital {capital}
      <br></br>
      area {area}
      <br></br>
      languages <ul>
      {Object.values(languages).map((value) => (
        <li key={value}>{value}</li>
      ))}
      <img src={image}></img>
    </ul>
    </div>
  )
}

export default App