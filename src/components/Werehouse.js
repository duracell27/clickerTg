import React, { useContext } from "react";
import { AppContext } from "../App";

const Werehouse = () => {
  const {
    werehouse,
    setWerehouse,
    animals,
    setAnimals,
    userInfo,
    setUserInfo,
  } = useContext(AppContext);

  const handleSell = (productName, sellPrice) => {
    setWerehouse(werehouse.map((item) => {
      if (item.name === productName){
        return {
         ...item,
          amount: 0
        };
      }
      return item;
    }));
    setUserInfo((prevVal)=>{
      return {
        ...prevVal,
          gold: prevVal.gold + sellPrice
        }
    })
  }

  return (
    <div className="">
      <div className="p-2 bg-slate-400 flex justify-center mb-2">Werehouse</div>
      <ul>
        {werehouse.map((item, index) => {
          return (
            <li key={index} className="mb-2 bg-stone-500">
              <p>
                <strong>{item.name}</strong>: {item.amount} pc.
              </p>
              <p>Price: {item.price}</p>
              <button onClick={()=>handleSell(item.name, item.amount * item.price)} className="bg-green-400">
                Sell for: {item.amount * item.price}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Werehouse;
