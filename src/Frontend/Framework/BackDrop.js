import { createPortal } from "react-dom";
import classes from './framework.module.css'
const BackDrop =(props)=>{

    return createPortal(
        <div className={classes.backdrop} onClick={props.onClick}></div>,
        document.getElementById("layOut")
      );
}
export default BackDrop;