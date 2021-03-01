import React, { useState } from 'react';




function ListItem(props) {

  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsClicked(prevValue => {
      return !prevValue;
    });
  }

  function handleDelete() {
    props.onDelete(props.id)
  }

  // function handleUpdate(){
  //   props.onUpdate(props.id)
  // }

  function handleCheck() {
    setIsChecked(prevValue => {
      return !prevValue;
    });
  }


  return (
    <div>

      <div onClick={handleCheck}>

        <li style={{
          textDecoration: isChecked
            ? "line-through"
            : "none",
        }}> {props.text}
        </li>
      </div>

      <button onClick={handleDelete} >Delete</button>



    </div>
  );
}

export default ListItem;

