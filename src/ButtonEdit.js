import React from 'react';
import {Button} from "reactstrap";

const ButtonEdit = (props) => {
    return (
        <div>
            <Button color="primary"  onClick={props.onEdit}> Edit </Button>{' '}
        </div>
    );
};

export default ButtonEdit;