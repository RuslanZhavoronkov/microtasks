import React from "react";

export type StudentType = {
  id: number;
  name: string;
  age: number;
};

type NewComponentPropsType = {
  users: Array<StudentType>;
};

export const NewComponent = (props: NewComponentPropsType) => {
  return (
    <ul>
      {props.users.map((objectFromStudentArray, index) => {
        return (
          <li key={objectFromStudentArray.id}>
            <span>{objectFromStudentArray.name}</span>
            <span> age: {objectFromStudentArray.age}</span>
          </li>
        );
      })}
    </ul>
  );
};
