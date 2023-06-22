import React from "react";

export type CarType = {
  manufacturer: string;
  model: string;
};

type FastPropsType = {
  bestcar: Array<CarType>;
};

export const FastCar = (props: FastPropsType) => {
  return (
    <table>
      <tr>
        <th>Number</th>
        <th></th>
        <th>Marka</th>
        <th></th>
        <th>Model</th>
      </tr>
      {props.bestcar.map((objectFromtopCars, index) => {
        return (
          <tr>
            <td>{index}</td>
            <td></td>
            <td>{objectFromtopCars.manufacturer}</td>
            <td></td>
            <td>{objectFromtopCars.model}</td>
          </tr>
        );
      })}
    </table>
  );
};
