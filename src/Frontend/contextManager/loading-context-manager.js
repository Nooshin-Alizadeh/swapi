import React from "react";

const ContextManager = React.createContext(false);
export default ContextManager;

// import React, { useContext, useState } from "react";
// import DataService from "../Framework/DataService";
// const ContextManager = React.createContext({
//   loading: false,
//   get: DataService.GetMethod,
//   post: DataService.post,
// });
// export default ContextManager;

// export const ContextManagerProvider = (props) => {
//   const ctx = useContext(ContextManager);
//   const [isLoading, setIsLoading] = useState(false);
//   <ContextManager.Provider value={{ loading: isLoading }}>
//     {props.children}
//   </ContextManager.Provider>;
// };
