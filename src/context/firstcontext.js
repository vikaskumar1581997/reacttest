import React from "react";

export const FirstContext =React.createContext();


export const FirstProvider=(props)=>{
     
//  const [value,setValue]=React.useState([]);

//  const valueUpdate=(selecteditem)=>{
//     setValue([...value,selecteditem] )
//  }



    return(
        <FirstContext.Provider value="light">

          
          {props.children}

        </FirstContext.Provider>
    )
}