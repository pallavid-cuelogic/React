import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        marginLeft: '-100px',
        marginTop: '20px',
        padding: '10px',
        textAlign: 'center',
    };
    for(let i=0 ; i < 10; i++){
        console.log(1);
      }
    return <input type="text" style={userInputStyle}
        onChange={props.changed} 
        value={props.currentName}  
    />;
};

export default userInput;
