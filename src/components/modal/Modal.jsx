import React from 'react';
import {Modal} from 'react-bootstrap';

const ModalComponent = ({title = <></>,
                   children=<></>,
                   footer= null,
                   isModalOpen,
                   setIsModalOpen}) => {
    return <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>
            {footer}
        </Modal.Footer>}
    </Modal>
}

export default ModalComponent;