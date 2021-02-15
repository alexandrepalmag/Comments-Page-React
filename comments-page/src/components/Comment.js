import React from 'react';
import './Comment.css';

//JSX
const Comment = props => (

    <div className="Comment">

        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.dateNow.toString()}</p>

    </div>
);

export default Comment;