import React from 'react';

const Cards = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.task.description}</h6>
                    <p className="card-text">{props.task.status}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};



export default Cards;