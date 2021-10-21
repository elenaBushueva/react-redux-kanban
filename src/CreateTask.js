import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";


const CreateTask = (props) => {

    const [modal, setModal] = useState(false);

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const toggle = () => {
        setInputName('');
        setInputDescription('');
        setModal(!modal);
    }

    const onCreate = () => {
        props.createCard(inputName, inputDescription);
        toggle();
    }


    return (
        <div>
            <Button color="primary" onClick={toggle}>Create Task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task name" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputName}
                               onChange={(e) => setInputName(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task description" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputDescription}
                               onChange={(e) => setInputDescription(e.target.value)}/>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onCreate} >Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createCard: (name, description) => dispatch({
        type: 'CREATE_CARD',
        payload: {name: name, description, status: 'todo', id: Math.random()}
    })
})

export default connect(null, mapDispatchToProps)(CreateTask);