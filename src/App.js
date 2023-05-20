import React, {useState} from 'react';
import MainTable from "./Components/MainTable";

const App = () => {
    const [persons, setPersons] =useState([])
    const [addModalOpen, setAddModalOpen] = useState(false)

    const openAddModal = () =>{
        setAddModalOpen(true)
    }

    const deletePerson = (id) =>{
        var buff = persons.filter(x=>x.id!==id)
        setPersons(buff)
    }

    const closeAddModal = () =>{
        setAddModalOpen(false)
    }

    const getPerson = (id) => {
        return persons.find(x=>x.id==id)
    }

    const addperson = (person) =>{
        console.log(person)
        setPersons(oldArray => [...oldArray, person]);
    }
    return (
        <div>
            <h1>Записная книжка</h1>
          <MainTable persons={persons} addPerson={addperson} closeAddModal = {closeAddModal} openAddModal={openAddModal}
          addModalOpen={addModalOpen} deletePerson={deletePerson}
          getPerson={getPerson}/>
        </div>
    );
};

export default App;
