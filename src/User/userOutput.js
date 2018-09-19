import React from 'react';

import './output.css';

const userOutput = (props) => {
    var i = [];
    let cnt=50;
    for (let j = 0; j < cnt; j++) {
        let k = (<div className="UserOutput">
                    <p onChange={props.currentName}>UserName: {props.userName}</p>
                    <p>I am Programmer</p>
                </div>)
        i.push(k);
    }

 return (
        <div>
            {i}
        </div>
    );
}

export default userOutput;


// import React from 'react';

// import './output.css';

// const userOutput = (props) => {
//     return (
//         <div className="UserOutput">
//             <p>Username: {props.userName}</p>
//             <p>I am a Programmer</p>
//         </div>
//     );
// };

// export default userOutput;