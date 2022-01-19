import React, {useState} from "react";




function Item({ name, category }) {

  
const [cart , setCart] = useState("")


  const handleAdd = () =>{
    setCart()
  }


  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd} >Add to Cart</button>
    </li>
  );
}

export default Item;
