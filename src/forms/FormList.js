import React from "react";

export default function FormList({ data }) {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>{`${item.name} ${item.number} ${item.email}`}</div>
      ))}
    </div>
  );
}
