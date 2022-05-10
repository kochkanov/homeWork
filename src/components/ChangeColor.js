import styled from "./ChangeColor.module.css";
import React from "react";
import { useEffect, useRef, useState } from "react";

export const ChangeColor = () => {
  const boxRef = useRef();
  const [box, setBox] = useState(false);

  useEffect(() => {
   const timer = setTimeout(() => {
      setBox(!box);
    }, 1000);
    box
      ? (boxRef.current.style.backgroundColor = "red")
      : (boxRef.current.style.backgroundColor = "green")
    return ()=>{
        clearTimeout(timer)
    }
  },[box]);
  console.log(boxRef.current);

  return <div ref={boxRef} className={styled.color}></div>;
};
