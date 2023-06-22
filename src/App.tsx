import React, { useState /* , {MouseEvent}*/ } from "react";
import "./App.css";
//import { Button } from "./components/Button";
//import { CarType, FastCar } from "./method_MAP/FastCar";
//import { NewComponent, StudentType } from "./method_MAP/NewComponent";
/*import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";*/

function App() {
  /*let student: Array<StudentType> = [
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 108 },
  ];

  const topCars: Array<CarType> = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];*/

  //const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //console.log("Hello I'am Vasia");
  //};

  //const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //console.log("Hello I'am Ivan");
  //};

  /*const onclickHandler = (name: string) => {
    console.log(name);
  };*/

  /* const foo1 = () => {
    console.log(100200);
  };

  const foo2 = (point: number) => {
    console.log(point);
  };*/

  /*const Button1Foo = (subscriber: string, age: number, adres: string) => {
    console.log(subscriber, age, adres);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };

  const Button3Foo = () => {
    console.log("Im stupid button");
 };*/

  //useState

  // let a = 1;
  /*let [a, setA] = useState(1);
  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  const onClickHandlernull = () => {
    setA((a = 0));
  };*/

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

  let currentMoney = money.filter(
    (filtredMoney, index) => filtredMoney.banknote === "ruble"
  );

  return (
    /*<>
      <div>
        <Header title="NEW BODY" />;
        <Body titleForBody="New Body" />
        <Footer titleForFooter="NEW FOOTER" />
      </div>
      <div>
        <NewComponent users={student} />
      </div>
      <div>
        <FastCar bestcar={topCars} />
      </div>

  <div>
        {/*<button
          onClick={(event) => {
            console.log("Hello");
          }}
        >
          MyYouTubeChannel-1
        </button>*/

    /*<button
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            onclickHandler("VASYA")
          }
        >
          MyYouTubeChannel-1
        </button>
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            onclickHandler("IVAN")
          }
        >
          MyYouTubeChannel-2
        </button>*/

    /*<button onClick={foo1}>1</button>
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>) => foo2(100200)}
        >
          2
        </button>*/

    /* <Button
          name="MyYouTubeChannel-1"
          callBack={() => Button1Foo("Im Vasy", 21, "live in Minsk")}
        />
        <Button
          name="MyYouTubeChannel-2"
          callBack={() => Button2Foo("Im Ivan")}
        />

        <Button name="Stupid Button" callBack={Button3Foo} />
      </div>
    </>*/

    //useState
    /*<div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandlernull}>0</button>
    </div>*/
    <>
      <ul>
        {currentMoney.map((objectFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objectFromMoneyArr.banknote}</span>
              <span>{objectFromMoneyArr.nominal}</span>
              <span>{objectFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <button>all</button>
      <button>ruble</button>
      <button>dollar</button>
    </>
  );
}

export default App;
