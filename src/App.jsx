import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Sana from "./Sana";
import Jamy from "./Jamy";
import Prenita from "./components/Prenita";
import REACT from "./REACT";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  
  
    {
      path: "/sana",
      element: <Sana />,
    },
    {
      path:"/prenita",
      element: <Prenita />,
    },
    {
      path:'/react',
      element:<REACT/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
