import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

const AlertMsg = (props) => {
  //  let variant=props.config.type ||type.primary;
  return props.config?.map((al) => {
    return (
      <Alert key={al?.type || type.primary} variant={al?.type || type.primary}>
        {al?.msg || "Something Happend."}
      </Alert>
    );
  });
  // <>

  //   <Alert key={variant} variant={variant}>
  //       {props?.config?.msg || 'Something Happend.'}
  //     </Alert>
  // </>
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
};

export default AlertMsg;
export const type = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
};
