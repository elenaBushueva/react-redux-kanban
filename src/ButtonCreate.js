import React from 'react';
import {Button} from "reactstrap";

const ButtonCreate = (props) => {
    return (
        <div>
            <Button color="primary" onClick={props.onCreate} >Create</Button>{' '}
        </div>
    );
};

export default ButtonCreate;