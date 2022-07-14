import React, { useState, useEffect } from "react";
import axios from "axios";

export function Api() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios("https://uitc.my-api.uz/students")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [update]);

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setUpdate(!update);
        }}
      >
        Update
      </button>
    </>
  );
}
