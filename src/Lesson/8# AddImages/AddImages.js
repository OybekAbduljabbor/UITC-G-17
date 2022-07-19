import React, { useState } from "react";
import "./AddImages.css";

export function AddImages() {
  const [imgDta, setImgDta] = useState([]);

  return (
    <div id="contener-add-img">
      {imgDta.map((img, index) => {
        return (
          <figure key={index}>
            <button
              onClick={() => {
                const MyData = [...imgDta];
                MyData.splice(index, 1);
                setImgDta(MyData);
              }}
            >
              x
            </button>
            <img src={URL.createObjectURL(img)} alt="" />
          </figure>
        );
      })}

      <label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          multiple="multiple"
          onChange={(e) => {
            setImgDta([...imgDta, ...e.target.files]);
          }}
        />
        <span>+</span>
      </label>
    </div>
  );
}
