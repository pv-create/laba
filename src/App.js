import React, {useState} from 'react';
import MainTable from "./Components/MainTable";

const App = () => {
    const [persons, setPersons] =useState([])
    const [addModalOpen, setAddModalOpen] = useState(false)

    const openAddModal = () =>{
        setAddModalOpen(true)
    }

    const closeAddModal = () =>{
        setAddModalOpen(false)
    }

    const addperson = (person) =>{
        console.log(person)
        setPersons(oldArray => [...oldArray, person]);
    }
    return (
        <div>
          <MainTable persons={persons} addPerson={addperson} closeAddModal = {closeAddModal} openAddModal={openAddModal}
          addModalOpen={addModalOpen}/>
        </div>
    );
};

export default App;
