import React, { useContext } from "react";
import { AppContext } from "../App";

const Animals = () => {
  const { animals, setAnimals, werehouse, setWerehouse, userInfo,
    setUserInfo } = useContext(AppContext);
  const clickHandler = (animalName, animalProduce, exp) =>{
    setAnimals(animals.map((item) => {
      if (item.name === animalName){
        if(item.clicksNow >= item.clicksToProduce-1){
          // додаємо в склад 
          setWerehouse(werehouse.map((item) => {
            if(item.name === animalProduce){
              return {
               ...item,
                amount: item.amount + 1
              };
            }
            return item;
          }))
          // онулення при макс кліках
          return {
            ...item,
             clicksNow: 0
           };
        }
        // додаємо клік
        return {
          ...item,
           clicksNow: item.clicksNow + 1
         };
      }
      
    }));
    setUserInfo((prevVal)=>{
      return {
      ...prevVal,
        exp: prevVal.exp + exp
      }
    })
  }
  return (
    <div className="">
      <div className="p-2 bg-slate-400 flex justify-center mb-2">Animals</div>
      <ul className="flex">
        {animals.map((item, index) => {
          return (
            <li key={index} className="mb-2 bg-stone-500 p-2 flex flex-col content-center text-center">
              <p>
                <strong>{item.name}</strong>
              </p>
              <div>
                <p>{item.clicksNow} / {item.clicksToProduce}</p>
                <input type="range" readOnly={true} min={0} max={item.clicksToProduce} step={1} value={item.clicksNow}/>
              </div>
              <div className="rounded-full w-[200px] h-[200px]">
                <button className="p-5" onClick={()=>clickHandler(item.name, item.produce, item.expPerClick)}>
                  <img
                    src={require(`./../assets/img/${item.img}`)}
                    alt={item.name}
                  />
                </button>
              </div>
              <p>
                Produce {item.produceAmount} {item.produce} every{" "}
                {item.clicksToProduce}{" "}
              </p>
              <p>Bought: {item.bought}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Animals;
