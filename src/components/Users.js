import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import styled from "./Users.module.css";

import React, { useEffect, useState } from "react";

export const Users = (props) => {
  
  const [addUser, setAddUser] = useState([]);
  



   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => response.json())
        .then((userData) => setAddUser(userData));
    }, []);


  return (
    <div className={styled.users}>
     
      <Card>
        {addUser.map((data) => {
          return (
            <div className={styled.cards} key={data.id}>
              <span>{data.id}</span>
              <p>Title : {data.title}</p>
              <img src={data.thumbnailUrl} />
            </div>
          );
        })}

        
      </Card>
      <Button onClick={props.closeUs}>back</Button>
    </div>
  );
};
