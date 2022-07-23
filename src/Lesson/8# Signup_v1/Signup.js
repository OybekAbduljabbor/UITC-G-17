import React, { useState } from "react";
import "./Signup.css";
import NumberFormat from "react-number-format";

export function Signup() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    grup: "",
    img: {},
  });

  console.log(user);

  return (
    <div id="contener">
      <form id="signup-form">
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
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          name="fam"
          placeholder="Familyangiz"
          autoComplete="off"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />

        <NumberFormat
          format="+99 (8##) ### ####"
          allowEmptyFormatting
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
          value={user.grup}
          onChange={(e) => setUser({ ...user, grup: e.target.value })}
        />
        <label>
          <input
            type="file"
            name="img"
            onChange={(e) => setUser({ ...user, img: e.target.files[0] || {} })}
          />
          <span>Rasim tanlang</span>
          <span>{(user.img.size / 1024).toFixed(1)}kb</span>
        </label>

        <button>Signup</button>
      </form>
    </div>
  );
}
