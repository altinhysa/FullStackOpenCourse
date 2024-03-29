import axios from 'axios'
import { useState, useEffect } from 'react'

const baseUrl = '/api/persons'


const Persons = (props) => {
    const myArray = props.persons
    const setMyArray = props.setPersons

   

    console.log('asd ', myArray)
 
    const handleDeleted = (id) => {
        setMyArray(myArray.filter(p => p.id !== id))
    }

    const remove = person => {
        
        if(window.confirm(`Delete ${person.person.name} ${person.person.phone}`)){
            const id = person.person.id
            handleDeleted(id)

            axios.delete(`${baseUrl}/${id}`)
                .then(response => {
                    console.log(response.data); // handle success response
                })
                .catch(error => {
                    console.error(error); // handle error response
                });
            

        }
        
    }

    

    return (
        <>
        {myArray.map(person => <li key={person.id}>{person.name} {person.phone} <button onClick={() => remove({person})}>delete</button></li>)}
        
        </>
    )
}

export default Persons