import React from 'react';
import {Button, Table} from "antd";
import AddModal from "./AddModal";

const MainTable = (props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
        },
        {
            title: 'Age',
            dataIndex: 'Age',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
        },
        {
            title: 'phoneNummber',
            dataIndex: 'phoneNummber',
        },
        {
            delete: 'Delete',
            render: (text) => <Button onClick={()=>{props.deletePerson(text.id)}} type="primary" danger>Delete</Button>
        },
        {
            delete: 'Update',
            render: (text) => <Button onClick={()=>{props.deletePerson(text.id); props.openAddModal()}} type="primary" >Update</Button>
        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={props.persons}/>
            <Button type="primary" onClick={()=>{props.openAddModal()}}>Добавить</Button>
            <AddModal onClose = {props.closeAddModal} open = {props.addModalOpen} addPerson = {props.addPerson}/>
        </div>
    );
};

export default MainTable;
