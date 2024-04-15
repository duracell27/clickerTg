import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import Nav from "./components/Nav";
import Animals from "./components/Animals";
import Werehouse from "./components/Werehouse";
import Shop from "./components/Shop";

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "animals/",
        element: <Animals />,
      },
      {
        path: "werehouse/",
        element: <Werehouse />,
      },
      {
        path: "shop/",
        element: <Shop />,
      },
    ],
  },
]);

const userInfoInit = {
  gold: 0,
  exp: 0,
};

const werehouseInit = [
  {
    name: "egg",
    amount: 0,
    price: 2,
  },
];

const animalsInit = [
  {
    name: "chicken",
    clicksToProduce: 10,
    clicksNow: 0,
    img: "Chicken-icon.png",
    produce: "egg",
    produceAmount: 1,
    bought: 1,
    expPerClick: 2,
  },
];

function App() {

  const [werehouse, setWerehouse] = useState(werehouseInit);
  const [animals, setAnimals] = useState(animalsInit);
  const [userInfo, setUserInfo] = useState(userInfoInit);

  return (
    <AppContext.Provider
      value={{
        werehouse,
        setWerehouse,
        animals,
        setAnimals,
        userInfo,
        setUserInfo
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
