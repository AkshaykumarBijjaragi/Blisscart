import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./Pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "Products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "Products:id",
        element: <SingleProduct />,
        errorElement: <Error />,
      },
      {
        path: "Cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "About",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "Checkout",
        element: <Checkout />,
        errorElement: <Error />,
      },
      {
        path: "Orders",
        element: <Orders />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}



