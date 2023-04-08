import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  const addNewPerson = (event) => {
    event.preventDefault()

    if(isPerson){
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const noteObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(noteObject))
    setNewName('');
    setNewNumber('');
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
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App