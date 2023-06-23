import React, { useState } from "react";
import "./App.css";
import { NewComponentFilter } from "./NewComponentsFilter";

export type FilterType = "all" | "dollar" | "ruble";
function App() {
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: " a1234567890" },
    { banknote: "dollar", nominal: 50, number: " z1234567890" },
    { banknote: "ruble", nominal: 100, number: " w1234567890" },
    { banknote: "dollar", nominal: 100, number: " e1234567890" },
    { banknote: "dollar", nominal: 50, number: " c1234567890" },
    { banknote: "ruble", nominal: 100, number: " r1234567890" },
    { banknote: "dollar", nominal: 50, number: " x1234567890" },
    { banknote: "ruble", nominal: 50, number: " v1234567890" },
  ]);

  //Создаем локальный State
  const [filter, setFilter] = useState<FilterType>("all");

  let currentMoney = money;
  if (filter === "dollar") {
    currentMoney = money.filter(
      (objectFiltredMoney, index) => objectFiltredMoney.banknote === "dollar"
    );
  } else if (filter === "ruble") {
    currentMoney = money.filter(
      (objectFiltredMoney, index) => objectFiltredMoney.banknote === "ruble"
    );
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    //Method Filter
    <>
      <NewComponentFilter
        valute={currentMoney}
        callback={onClickFilterHandler}
      />
    </>
  );
}

export default App;
