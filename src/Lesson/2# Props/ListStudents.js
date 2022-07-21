import React from "react";

export function ListStudents({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <ol id="list-students">
            <li>{index + 1}</li>
            <li>
              {item.ism} {item.fam}
            </li>
            <li>{item.tel}</li>
            <li>{item.grup}</li>
          </ol>
        );
      })}
    </>
  );
}
