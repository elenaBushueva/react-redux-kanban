import React from 'react';
import {connect} from "react-redux";
import Cards from "./Cards";

const Columns = (props) => {
    return (
            <div className="col">
                <h2>{props.status.title}</h2>

                {props.tasks
                    .filter(el => el.status === props.status.title)
                    .sort((a, b) => a.priority - b.priority)
                    .map(el => <Cards
                key={el.id}
                task={el}
                /> )}
            </div>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(Columns);