import React from "react";

type ButtonsPropsType = {
  name: string;
  callBack: () => void;
};

export const Buttons = (props: ButtonsPropsType) => {
  const onclickButtonsHandler = () => {
    props.callBack();
  };

  return <button onClick={onclickButtonsHandler}>{props.name}</button>;
};
