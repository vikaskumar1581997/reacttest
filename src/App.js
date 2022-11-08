import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from "axios"
import {FirstContext} from "./context/firstcontext"

function App() {

  const x=React.useContext(FirstContext)

  const [val,setVal]=React.useState(null)

  // useEffect(   ()=>{
  //    axios.get("http://localhost:3080/data")
  //    .then((res)=>{
  //     const data=res.data
  //     setVal(data)
  //     console.log("mount",res)
  //   })
      
  // })

// useEffect(  ()=>{

//     const myf=async  ()=>{
//     const response=await  fetch("http://localhost:3080/data")
//      const data=await response.json();
//      setVal(data)
//      console.log(val)
//   };
//  myf()

// },[])


useEffect(()=>{
(async  ()=>{
  const response=await  fetch("http://localhost:3080/data")
   const data=await response.json();
   setVal(data)
   console.log(data)
})();
},[])


  console.log("hiiico",val)
//====================================
  if(val === null) {
    return (
      //console.log("hiiiconsole")
  
      <div>
        <h1>loading.... please wait </h1> 
      </div>
    );
  } else {
    return(
      val.map((ele)=>{
        return(
        <div>
            <h1>{ele._id}</h1>
            <h1>{ele.count}</h1>
        </div>
        )
      })
    )
  }

  //=========================================

  // return(
  //   // <div>
  //   // <div>hiiiii {x}</div>
  //   // {(val === null)? <div>No data</div> : 
  //   // (val.map((ele)=>{
  //   //   return(<div>{ele.count}</div>)
  //   //   }))}
  //   // </div>
  //   <div>
  //     <h1>loading.... please wait {x}</h1>
  //     {val===null?<div>no value</div> :
  //       (val.map((each) =>{ 
  //         return (<div> {each._id} </div>)
  //       }))}
      
  //   </div>
  // )


//==================================

}

export default App;
