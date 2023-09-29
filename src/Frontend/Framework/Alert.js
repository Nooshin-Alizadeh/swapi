import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const AlertMsg=(props)=> {
 
  return (
    <>
      <Alert key={props.variant} variant={props.variant}>
          This is a {props.variant} alert—check it out!
        </Alert>
    </>
//     const alert =useSelector(state=>{
//         return state.alert;
//     });
//     if(alert)
//   return (
//     <>
//       <Alert key={alert.variant} variant={alert.variant}>
//           This is a {alert.variant} alert—check it out!
//         </Alert>
//     </>
  );
}

export default AlertMsg;
const type = {
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    info: "info",
    light: "light",
    dark: "dark",
  };