import React from 'react';
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import {connect} from "react-redux";

const Cards = (props) => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.task.description}</h6>
                    <p className="card-text">{props.task.status}</p>

                    priority: {props.task.priority}

                    <br/><br/>
                    <button type="button" className="btn-outline-secondary btn-sm"
                            disabled={props.statuses.indexOf(props.task.status) === 0}
                            onClick={() => props.moveCard(props.task.id, props.task.status, -1)}> ❮
                    </button>


                    <button type="button" className="btn-outline-secondary btn-sm"
                            disabled={props.priority.indexOf(props.task.priority) === props.priority.length - 1}
                            onClick={() => props.changePriority(props.task.id, props.task.priority, +1)}> ˄
                    </button>

                    <button type="button" className="btn-outline-secondary btn-sm"
                            disabled={props.priority.indexOf(props.task.priority) === 0}
                            onClick={() => props.changePriority(props.task.id, props.task.priority, -1)}> ˅
                    </button>


                    <button type="button" className="btn-outline-secondary btn-sm"
                            disabled={props.statuses.indexOf(props.task.status) === props.statuses.length - 1}
                            onClick={() => props.moveCard(props.task.id, props.task.status, +1)}> ❯
                    </button>
                    <br/><br/>

                    <EditTask task={props.task}/>

                    <DeleteTask task={props.task}/>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    statuses: state.statuses.map(el => el.title),
    priority: state.priority,
})

const mapDispatchToProps = dispatch => ({
    moveCard: (id, currStatus, direction) => dispatch({type: 'CHANGE_STATUS', payload: {id, currStatus, direction}}),
    changePriority: (id, priority, direction) => dispatch({type: 'CHANGE_PRIORITY', payload: {id, priority, direction}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);