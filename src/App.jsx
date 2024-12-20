import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
