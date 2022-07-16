import React, { useState } from "react";
import "./AddImg.css";

export function AddImg() {
  const [imgDta, setImgDta] = useState(false);

  return (
    <div id="contener-add-img">
      <figure style={imgDta ? { display: "flex" } : {}}>
        <button
          onClick={() => {
            setImgDta(false);
          }}
        >
          x
        </button>
        <img src={imgDta ? URL.createObjectURL(imgDta) : ""} alt="" />
      </figure>

      <label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          // multiple="multiple"
          onChange={(e) => {
            setImgDta(e.target.files[0]);
          }}
        />
        <span>+</span>
      </label>
    </div>
  );
}
