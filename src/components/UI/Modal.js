import classes from './Modal.module.css';
import react, {Fragment} from 'react';

const Backdrop = props =>{
    return <div className={classes.backdrop}/>;

};

const ModelOverlay = props =>{
    return (
    <div className={classes.modal}>
     <div className={classes.content}>{props.children}</div>
    </div>
    );

};

const Modal =(props)=>{

    return (
        <Fragment>
            <Backdrop/>
            <ModelOverlay>{props.children}</ModelOverlay>
        </Fragment>


    );

}
export default Modal;