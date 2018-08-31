
import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        marginLeft: '-100px',
        marginTop: '20px',
        padding: '10px',
        textAlign: 'center',
        border: '2px solid black',
        boxShadow: '0 2px 5px black'
    };

    return <input type="text" style={userInputStyle}
        onChange={props.changed} 
        value={props.currentName}  //two way binding
        />;
};

export default userInput;
