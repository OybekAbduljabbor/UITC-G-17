import React from "react";
import "./Students.css";
import { ListStudents } from "../Components/ListStudents";

const DataStudents = [
  {
    id: 1,
    ism: "Muzaffar",
    fam: "Umarov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 2,
    ism: "Bekzod",
    fam: "Qodirjonov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 3,
    ism: "Shoxjaxon",
    fam: "Olimjonov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 4,
    ism: "Xojiakbar",
    fam: "Nasriddinov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 5,
    ism: "Ibroxim",
    fam: "Akramov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 6,
    ism: "Kamil",
    fam: "Axmedov",
    tel: "123456789",
    grup: "Full",
  },
  {
    id: 7,
    ism: "Farrux",
    fam: "Sultanov",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 8,
    ism: "Bexruz",
    fam: "Xasanboev",
    tel: "123456789",
    grup: "G17",
  },
  {
    id: 9,
    ism: "Omadbek",
    fam: "Umarboev",
    tel: "123456789",
    grup: "G17",
  },
];

export function Students() {
  return (
    <div id="contener-students">
      <ol id="list-students">
        <li>T/r</li>
        <li>Ism Familya</li>
        <li>Telefon</li>
        <li>Grup</li>
      </ol>
      {<ListStudents data={DataStudents} />}
    </div>
  );
}
