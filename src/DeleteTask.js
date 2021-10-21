import React, {useState} from 'react';
import {Button, Modal, ModalFooter, ModalBody} from 'reactstrap';
import {connect} from "react-redux";

const DeleteTask = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onDelete = () => {
        props.deleteTask(props.task.id);
        toggle();
    }


    return (
        <div>
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={toggle} > Delete </button>

            <Modal isOpen={modal} toggle={toggle}>

                <ModalBody toggle={toggle}> Are you sure you want to delete <b>{props.task.name}? </b></ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={onDelete}> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>

            </Modal>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch ({type: 'DELETE_TASK', payload: id})
})

export default connect(null, mapDispatchToProps)(DeleteTask);