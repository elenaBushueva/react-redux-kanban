import React from 'react';
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from "./CreateTask";

const App = (props) => {
    console.log(props)

    return (
            <div className="container">
                <h1>Kanban Redux</h1>

                <CreateTask />

                <div className="row align-items-start">
                    {props.statuses.map(el => <Columns
                        key={el.id}
                        status={el}
                    />)}
                </div>
            </div>
    );
};

const mapStateToProps = state => ({
    statuses: state.statuses,
});

const mapDispatchToProps = dispaptch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);