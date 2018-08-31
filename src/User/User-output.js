import React from 'react';

import './Output.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Some Paragraph here
            </p>
        </div>
    );
};

export default userOutput;
