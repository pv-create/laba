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
