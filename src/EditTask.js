import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import ButtonEdit from "./ButtonEdit";


const EditTask = (props) => {

    const [modal, setModal] = useState(false);

    const [inputName, setInputName] = useState(props.task.name);
    const [inputDescription, setInputDescription] = useState(props.task.description);

    const toggle = () => {
        // setInputName(props.task.name)
        // setInputDescription(props.task.description)
        setModal(!modal);
    }


    const onEdit = () => {
        const updatedCard = {...props.task, name: inputName, description: inputDescription};
        props.editCard(updatedCard);
        toggle();
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={toggle} >Edit</button>

            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>

                <ModalBody>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task name" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputName} onChange={(e) => setInputName(e.target.value)}
                               />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task description" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)}
                               />
                    </div>
                </ModalBody>

                <ModalFooter>
                  <ButtonEdit onEdit={onEdit}/>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    editCard: (updatedCard) => dispatch ({ type: 'EDIT_CARD', payload: updatedCard })
})

export default connect(null, mapDispatchToProps)(EditTask);