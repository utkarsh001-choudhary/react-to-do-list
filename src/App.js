import React, { useState } from "react";
import Items from "./items";
function App(){
const [newitem,setnewitem]= useState("");
const [todoitems ,settodoitems]=useState([]);
function update(event){
  const nn=event.target.value;
  return (setnewitem(nn));
}
function insert(){
  (settodoitems(prevValue=> [...prevValue,newitem]))
  setnewitem("");
}
function Delete(x){
  settodoitems(prevValue=>{
    return (prevValue.filter((value,index)=>{
        return index!==x
    }))
  })
     
}
 return ( 
 <div className="container">
   <div className="heading">
   <h1 className="heading">To do list</h1>
   </div>
   <div className="form">
   <input onChange={update} name="input" value={newitem} ></input>
   <button onClick={insert} >ADD</button>
   <ul>
        {todoitems.map( (x,index) =>{
         return   <Items  key={index} pos={index} value={x} onChecked={Delete}/>
        })}
   </ul>
   </div>

 </div>

 );
}

export default App;