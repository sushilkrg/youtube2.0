import React from "react";
import Button from "./Button";

const buttonItems = ["All", "Live", "Movies", "MacBook", "Music", "Ram", "Shaym", "Mohan", "Sohan"];

const ButtonList = () => {
  return (
    <div className="flex ">
      {buttonItems.map((data, i) => (
        <Button key={i} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
