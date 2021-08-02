import React from "react";

function Card(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.question}</h1>
      <p>{props.correctAnswer}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Card;
