import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const ModalDelete = ({onDelete, name, onBtnClick, titleName}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => {
            onBtnClick();
            setIsModalOpen(true);}
        }>
            Izbriši
        </Button>
        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Brisanje {titleName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Da li ste sigurni da zelite izbrisati {name}?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Odustani
            </Button>
            <Button variant="primary" onClick={() => {
                onDelete();
                setIsModalOpen(false);
            }}>
                Izbrisi
            </Button>
        </Modal.Footer>
    </Modal></>
}

export default ModalDelete;