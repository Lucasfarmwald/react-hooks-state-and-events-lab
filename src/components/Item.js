import React, {useState} from "react";




function Item({ name, category }) {

  
const [cart , addCart] = useState('add')

function handleAdd(){
  addCart("in-cart" )
}
 
  return (
    <li className={cart} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{cart}</button>
    </li>
  );
}

export default Item;
