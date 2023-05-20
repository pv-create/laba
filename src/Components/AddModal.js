import React, {useState} from 'react';
import {Button, Input, Modal} from "antd";

const AddModal = (props) => {
    const [name, setName] = useState()
    const [age, setage] = useState()
    const [adress, setAdress] = useState()
    const [number, setNumber] = useState()

    const [newPerson, setNewPerson]=useState({
        Name:'',
        Age:0,
        Address:'',
        phoneNummber:''
    })
    return (
        <div>
            <Modal onOk={()=>{props.addPerson(newPerson); props.onClose()}}  title="Добавление" open={props.open} onCancel={props.onClose}>
                Имя:<Input value={newPerson.Name} onChange={ (value)=>{setNewPerson({...newPerson, Name: value.target.value})}}/>
                Возраст:<Input value={newPerson.Age} onChange={ (value)=>{setNewPerson({...newPerson, Age: value.target.value})}}/>
                Адресс:<Input value={newPerson.Adress} onChange={ (value)=>{setNewPerson({...newPerson, Address: value.target.value})}}/>
                Мобильный телефон:<Input value={newPerson.phoneNummber} onChange={ (value)=>{setNewPerson({...newPerson, phoneNummber: value.target.value})}}/>
            </Modal>
        </div>
    );
};

export default AddModal;
