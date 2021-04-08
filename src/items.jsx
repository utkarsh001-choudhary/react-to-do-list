import React from 'react';
function Items(props){
   
   function sendOrder(){
       return props.onChecked(props.pos);
   }

    return (
       <li onClick={sendOrder}>{props.value}</li>
    )
}
export default Items;