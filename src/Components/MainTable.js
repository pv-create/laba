import React from 'react';
import {Button, Table} from "antd";
import AddModal from "./AddModal";

const MainTable = (props) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'phoneNummber',
            dataIndex: 'number',
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={props.persons}/>
            <Button type="primary" onClick={()=>{props.openAddModal()}}>Добавить</Button>
            <AddModal onClose = {props.closeAddModal} open = {props.addModalOpen}/>
        </div>
    );
};

export default MainTable;
