import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([

  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personsService.getAll().then(value => setPersons(value))
  }, [])


  const addNewPerson = (event) => {
    event.preventDefault()

    if(isPerson){
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const noteObject = {
      name: newName,
      number: newNumber
        }

    personsService.create(noteObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })

    
  }

  const isPerson = persons.find(({ name }) => name === newName);

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log('phone change', event.target.value)
    setNewNumber(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.includes(newFilter))

  const handeFilterChange = (event) => {
    console.log('filter change', event.target.value)
    setNewFilter(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} change={handeFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm submit={addNewPerson}  name={newName} nameChange={handleNoteChange} phone={newNumber} phoneChange={handlePhoneChange}/>
      
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <Persons persons={filteredPersons} setPersons={setPersons}/>
    </div>
  ) 
}

export default App