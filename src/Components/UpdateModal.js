import React from 'react';
import {useState} from "@types/react";
import {Input, Modal} from "antd";

const UpdateModal = (props) => {
    const [newPerson, setNewPerson]=useState({
        Name:'',
        Age:0,
        Address:'',
        phoneNummber:'',
        id:''
    })
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

export default UpdateModal;
