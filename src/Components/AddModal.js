import React, { useState} from 'react';
import { v4 as uuid } from 'uuid';
import {Button, Input, Modal} from "antd";

const AddModal = (props) => {
    const [name, setName] = useState()
    const [age, setage] = useState()
    const [adress, setAdress] = useState()
    const [number, setNumber] = useState()

    const id = uuid();

    const [newPerson, setNewPerson]=useState({
        Name:'',
        Age:0,
        Address:'',
        phoneNummber:'',
        id:''
    })
    const save = () =>{
        console.log(uuid())
        setNewPerson({...newPerson, id: uuid()})
        props.addPerson(newPerson);
        props.onClose()
    }
    return (
        <div>
            <Modal onOk={()=>{ save()}}  title="Добавление" open={props.open} onCancel={props.onClose}>
                Имя:<Input value={newPerson.Name} onChange={ (value)=>{setNewPerson({...newPerson, Name: value.target.value})}}/>
                Возраст:<Input value={newPerson.Age} onChange={ (value)=>{setNewPerson({...newPerson, Age: value.target.value})}}/>
                Адресс:<Input value={newPerson.Adress} onChange={ (value)=>{setNewPerson({...newPerson, Address: value.target.value})}}/>
                Мобильный телефон:<Input value={newPerson.phoneNummber} onChange={ (value)=>{setNewPerson({...newPerson, phoneNummber: value.target.value})}}/>
            </Modal>
        </div>
    );
};

export default AddModal;
