import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import ContainerApp from "./ContainerApp";
import ProductCashierPage from "./pages/product-cashier";

const router = createBrowserRouter([
  {
    path: "",
    element: <ContainerApp />,
    children: [
      {
        path: "",
        element: <ProductPage />,
      },
      {
        path: "cashier",
        children: [
          {
            path: "",
            element: <ProductCashierPage />,
          },
          {
            path: "cart",
            element: <CartPage />,
          },
        ],
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
