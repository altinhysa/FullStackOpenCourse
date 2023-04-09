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

    const noteObject = {
      name: newName,
      number: newNumber
        }
    
    if(isPerson){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
        console.log(findId(newName))
        const id = findId(newName)
        console.log('id', id)
        personsService.update(id, noteObject).then(returnedPerson => {
          setPersons(persons.map(p => p.id !== id ? p :returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
      
      return;
    }


    personsService.create(noteObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })

    
  }

  const isPerson = persons.find(({ name }) => name === newName);

  const findId = (namee) => {
    return persons.reduce((prev, current) => {
      console.log(current.name, ' - ', current.id)
      if(current.name === namee){
        console.log('found', current.id)

        return current.id
      }
      return prev
    },null)
  } 

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