import React from "react";
import { FilterType } from "./App";

type objectType = {
  banknote: string;
  nominal: number;
  number: string;
};

type NewComPropsType = {
  callback: (value: FilterType) => void;
  valute: Array<objectType>;
};

export const NewComponentFilter = (props: NewComPropsType) => {
  return (
    <>
      <ul>
        {props.valute.map((objectFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objectFromMoneyArr.banknote}</span>
              <span>{objectFromMoneyArr.nominal}</span>
              <span>{objectFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: "35px" }}>
        <button
          onClick={() => {
            props.callback("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            props.callback("ruble");
          }}
        >
          rubles
        </button>
        <button
          onClick={() => {
            props.callback("dollar");
          }}
        >
          dollars
        </button>
      </div>
    </>
  );
};
