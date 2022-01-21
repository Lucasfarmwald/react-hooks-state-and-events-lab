import React, {useState} from "react";




function Item({ name, category }) {

  
const [isInCart , setIsInCart] = useState(false)

function handleAdd(){
  console.log(isInCart)
  setIsInCart(!isInCart )
}
 function renderButtonText(){
  if(isInCart){
    return 'Remove from cart'
  } else{
    return 'Add to Cart'
  }
 }
 function renderClassName(){
   if(isInCart){
     return 'in-cart'
   }else{
     return ''
   }
 }

  return (
  <li className={renderClassName()} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{renderButtonText()}</button>
    </li>
  );
}

export default Item;
