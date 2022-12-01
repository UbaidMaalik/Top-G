import React from "react";

const Button = (props) => {
  return (
    <div className="Button">
      <button className="Btns">{props.titleName}</button>
    </div>
  );
};

export default Button;
