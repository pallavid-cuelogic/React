import React, { Component } from 'react';

import classes from './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children!==this.props.children;
    }

    componentWillUpdate(){
        console.log("[Modal] : component willUpdate");  
    }
    render() {
        return (<Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>);
    }

}

export default Modal;



// import React,{Component} from 'react';

// import classes from './Modal.css'
// import Aux from '../../../hoc/Aux';
// import Backdrop from '../Backdrop/Backdrop';

// class Modal extends Component{

//     shouldComponentUpdate(nextProps, nextState){
//         return nextProps.show !==this.props.show || nextProps.children !== this.props.children; 
//     }

//     componentWillUnmount(){
//         console.log("[Modal]: component willUpdate");
//     }

//     render(){
//     return(
//         <Aux>
//             <Backdrop show={this.state.show} clicked={this.state.modalClosed}/>
//             <div 
//                 className={classes.Modal}
//                 style={{
//                     transform: this.state.show ? 'translateY(0)' : 'translateY(-100vh)',
//                     opacity: this.state.show ? '1': '0'
//                 }}>
//                 {this.state.children}
//             </div>
//         </Aux>
//     );
//     }
// }

// export default Modal;
