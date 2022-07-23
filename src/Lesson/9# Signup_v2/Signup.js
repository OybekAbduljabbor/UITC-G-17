import React, { useState } from "react";
import "./Signup.css";
import NumberFormat from "react-number-format";

export function Signup() {
  const [user, setUser] = useState({
    phone: "",
    img: {},
  });

  return (
    <div id="contener">
      <form
        id="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          setUser({
            ...user,
            ism: e.target.ism.value,
            fam: e.target.fam.value,
            grup: e.target.grup.value,
            img: e.target.img.files[0] || {},
          });
        }}
      >
        <figure>
          <img
            src={user.img.size ? URL.createObjectURL(user.img) : ""}
            alt=""
          />
        </figure>

        <input
          type="text"
          name="ism"
          placeholder="Ismingiz"
          autoComplete="off"
        />
        <input
          type="text"
          name="fam"
          placeholder="Familyangiz"
          autoComplete="off"
        />

        <NumberFormat
          format="+99 (8##) ### ####"
          allowEmptyFormatting
          name="phone"
          onValueChange={(values) => {
            const { value } = values;
            setUser({ ...user, phone: value });
          }}
        />

        <input
          type="text"
          name="grup"
          placeholder="UITC gruxingiz"
          autoComplete="off"
        />
        <label>
          <input type="file" name="img" />
          <span>
            {user.img.size ? reNameImg(user.img.name) : "Rasim tanlang"}
          </span>
          <span>
            {user.img.size ? (user.img.size / 1024).toFixed(1) + "kb" : ""}
          </span>
        </label>

        <button>Signup</button>
      </form>
    </div>
  );
}

function reNameImg(imgName) {
  const arrName = imgName.split("");

  return arrName.slice(0, 15).join("") + "...";
}
