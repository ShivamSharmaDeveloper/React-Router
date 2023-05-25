import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";

// const routerDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefination);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
