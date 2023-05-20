import React from 'react';
import {Input, Modal} from "antd";

const AddModal = (props) => {
    return (
        <div>
            <Modal title="Добавление" open={props.open} onCancel={props.onClose}>
                Имя:<Input ></Input>
                Возраст:<Input></Input>
                Адресс:<Input></Input>
                Мобильный телефон:<Input></Input>
            </Modal>
        </div>
    );
};

export default AddModal;
